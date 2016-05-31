angular
  .module('play')
  .controller('usersShowController', UsersShowController);

UsersShowController.$inject = ['User', 'CurrentUser',  '$stateParams'];
function UsersShowController(User, CurrentUser, $stateParams){
  var vm = this;

  User.get($stateParams).$promise.then(function(data){
    vm.user = data.user;
  });

}
