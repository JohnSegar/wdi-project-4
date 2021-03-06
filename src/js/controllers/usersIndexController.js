angular
  .module('play')
  .controller('usersIndexController', UsersIndexController);

UsersIndexController.$inject = ['User', 'CurrentUser', '$state'];
function UsersIndexController(User, CurrentUser, $state){

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
  self.makeKirbyFly  = makeKirbyFly;
  self.makeBbbRoll   = makeBbbRoll;
  self.adventureWalk = adventureWalk;

  function getUsers() {
    User.query(function(data){
      self.all = data.users;
    });
  }

  function handleLogin(res) {
    var token = res.token ? res.token : null;
    if (token) {
      self.getUsers();
      $state.go('usersIndex');
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

  function makeKirbyFly(){
    var hello = document.querySelector( 'img#kirby' );
    console.log(hello);
    $(hello).animate({"left":"100%", "top":"-50%" }, 2000, "swing");
  }

  function makeBbbRoll(){
    var hola = document.querySelector( 'img#bbb' );
    console.log(hola);
    $('img#bbb').animate({"left":"100%"}, 2000);
  }

  function adventureWalk(){
    var bonjour = document.querySelector( 'img#adventure' );
    $('img#adventure').animate({"left":"100%"}, 2000);
  }
