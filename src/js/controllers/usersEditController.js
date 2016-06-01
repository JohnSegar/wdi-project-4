angular
  .module('play')
  .controller('usersEditController', UsersEditController);

UsersEditController.$inject = ['User', '$stateParams', '$state', '$http', 'API'];
function UsersEditController(User, $stateParams, $state, $http, API){
  var vm = this;

  vm.update = function(){
    // console.log(vm.user);
    User.update({id: vm.user._id}, vm.user).$promise.then(function(data){
      // console.log(data);
      $state.go("usersShow", {id: data.user._id});
    });
  };

  User.get($stateParams).$promise.then(function(data){
    vm.user = data.user;
  });

  // Any function returning a promise object can be used to load values asynchronously
  vm.getGame = function(query) {
    return $http.post(API + '/games', {query: query})
      .then(function(response){
        // console.log(response);
        var games = response.data.games;
        return games.map(function(game) {
          return game.name;
        });
      });
  };
}
