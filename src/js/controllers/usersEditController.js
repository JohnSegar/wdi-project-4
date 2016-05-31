angular
  .module('play')
  .controller('usersEditController', UsersEditController);

UsersEditController.$inject = ['User', '$stateParams', '$state', '$http'];
function UsersEditController(User, $stateParams, $state, $http){
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

  // Any function returning a promise object can be used to load values asynchronously
  vm.getGame = function(query) {
    return $http.jsonp('https://www.igdb.com/api/v1/games/search', {
      headers: {
        'Authorization': 'Token token="GiphqcvtB67EfAQKxJJyyQi7h6Q-KjretolOTxjVmxU"'
      },
      params: { q: query }
    }).then(function(response){
      console.log(response);
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

}
