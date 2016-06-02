angular
  .module('play')
  .controller('usersSameGameController', UsersSameGameController);

  UsersSameGameController.$inject = ['$state', 'User', 'CurrentUser'];
  function UsersSameGameController($state, User, CurrentUser){
    self.users = getUsers();

    function getUsers(){
      var id = CurrentUser.getUser()._id;
      return User.search({ id: id }, function(response) {
        console.log(response);
      });
    }

  }
