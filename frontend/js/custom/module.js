/* Create Modules */
angular.module('BancaStoreController', [])

var app = angular.module('bancastore', [
  'ngRoute',
  'BancaStoreController'
])

.config(function($routeProvider,$locationProvider){ 
  $routeProvider.when('/', {
    templateUrl:'public/html/partials/home.html',
    controller: 'HomeController'
  })

  $routeProvider.when('/home', {
    templateUrl:'public/html/partials/home.html',
    controller: 'HomeController'
  })

  $routeProvider.when('/404', {
    templateUrl:'public/html/404.html',
  })

  $routeProvider.otherwise({
    redirectTo:'/404',
  })

  $locationProvider.html5Mode(true);
})