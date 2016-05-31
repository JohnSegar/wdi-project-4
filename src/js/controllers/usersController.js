angular
  .module('logging')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'CurrentUser', '$state', '$http', 'API'];
function UsersController(User, CurrentUser, $state, $http, API){

  var self = this;

  self.all           = [];
  self.user          = null;
  self.currentUser   = null;
  self.error         = null;
  self.getUsers      = getUsers;
  self.register      = register;
  self.login         = login;
  self.logout        = logout;
  self.checkLoggedIn = checkLoggedIn;

  self.steam = function(){
    var key  = "24BCB049F320ADFA59588AF7C09EB761";
    var name = "quagmire056";

    $http({
      method: "GET",
      url: "http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key="+key+"&vanityurl="+name,
      dataType: "jsonp"
    }).then(function(response){
      console.log(response);
      // $http({
      //   method: 'GET',
      //   url: "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key="+key+"&steamid=76561197960435530&relationship=friend"
      // }).then(function(response) {
      //   console.log(response);
      // }, function(err) {
      //   console.log(err);
      // });
    }, function(err) {
      console.log(err);
    });
  };

  function getUsers() {
    User.query(function(data){
      self.all = data.users;
    });
  }

  function handleLogin(res) {
    var token = res.token ? res.token : null;
    if (token) {
      self.getUsers();
      $state.go('home');
    }
    self.currentUser = CurrentUser.getUser();
  }

  function handleError(e) {
    self.error = "Something went wrong.";
  }

  function register() {
    User.register(self.user, handleLogin, handleError);
  }

  function login() {
    User.login(self.user, handleLogin, handleError);
  }

  function logout() {
    self.all         = [];
    self.currentUser = null;
    CurrentUser.clearUser();
  }

  function checkLoggedIn() {
    self.currentUser = CurrentUser.getUser();
    return !!self.currentUser;
  }

  if (checkLoggedIn()) {
    self.getUsers();
  }

  return self;
}
