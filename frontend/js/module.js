/* Create Modules */
angular.module('BancaStoreController', [])

var app = angular.module('bancastore', [
	'ngRoute',
	'BancaStoreController'
])

.config(function($routeProvider,$locationProvider){ 
	$routeProvider.when('/home', {
    templateUrl:'public/html/partials/main.html',
  })

  $locationProvider.html5Mode(true);
})