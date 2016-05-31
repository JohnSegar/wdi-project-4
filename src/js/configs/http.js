angular
  .module('play')
  .config(Http);

Http.$inject = ["$httpProvider"];
function Http($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
}
