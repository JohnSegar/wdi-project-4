angular
  .module('play')
  .controller('usersEditController', UsersEditController);

UsersEditController.$inject = ['User', '$stateParams', '$state'];
function UsersEditController(User, $stateParams, $state){
  var vm = this;

  vm.update = function(){
    console.log(vm.user);
    User.update({id: vm.user._id}, vm.user).$promise.then(function(data){
      console.log(data);
      $state.go("usersShow", {id: data.user._id});
    });
  };

  User.get($stateParams).$promise.then(function(data){
    vm.user = data.user;
  });

}
