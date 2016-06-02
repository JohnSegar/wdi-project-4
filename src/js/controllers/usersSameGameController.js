angular
  .module('play')
  .controller('usersSameGameController', UsersSameGameController);

  UsersSameGameController.$inject = ['$state', 'User', 'CurrentUser'];
  function UsersSameGameController($state, User, CurrentUser){
    self.getUsers = getUsers;
    self.users = [];


    function getUsers(){
      console.log("ksdfjg");
      var id = CurrentUser.getUser()._id;
      return User.search({ id: id }, function(response) {
        console.log(response.users);
        self.users = response.users;
      });
    }

    getUsers();

    return self;
  }
