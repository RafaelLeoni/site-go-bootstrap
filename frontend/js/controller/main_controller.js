angular.module("BancaStoreController")

.controller("MainController", function($scope) {
  $scope.records = [
  	'public/fonts/image/home-icon.png',
    'public/fonts/image/about-us-icon.png',
    'public/fonts/image/newspaper-icon.png',
    'public/fonts/image/contact-icon.png'
  ]
})

.directive('thumbnail', function() {
	return {
 		restrict: 'E',
 		scope: {src: '@'},
 		templateUrl: 'public/html/directives/thumbnail.html'
	}
})