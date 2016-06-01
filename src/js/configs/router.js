angular
  .module('play')
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./js/views/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "./js/views/authentications/login.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "./js/views/authentications/register.html"
    })
    .state('usersIndex', {
      url: "/users",
      templateUrl: "./js/views/users/index.html"
    })
    .state('usersShow', {
      url: "/users/:id",
      templateUrl: "./js/views/users/show.html",
      controller: "usersShowController",
      controllerAs: "usersShow"
    })
    .state('usersEdit', {
      url: "/users/:id/edit",
      templateUrl: "./js/views/users/edit.html",
      controller: "usersEditController",
      controllerAs: "usersEdit"
    })
    .state('usersSameGame', {
      url: "/sameGame",
      templateUrl: "./js/views/users/sameGame.html",
      controller: "usersSameGameController",
      controllerAs: "usersSameGame"
    });

  $urlRouterProvider.otherwise("/");
}
