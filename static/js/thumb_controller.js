var app = angular.module("bancastore", []);

app.controller("thumb_controller", function($scope) {
  $scope.records = [
  	'public/image/home-icon.png',
    'public/image/about-us-icon.png',
    'public/image/newspaper-icon.png',
    'public/image/contact-icon.png'
  ]
})

app.directive('repeat-tag', function() {
	return {
 		restrict: 'E',
 		scope: {src: '@'},
 		template: '<div class="col-sm-3 col-md-3 col-lg-3">' +
	 							'<div class="thumbnail">' +
	 								'<img src="{{src}}">' +
	   							'<div class="caption">' +
	     							'<p>{{src}}</p>' +
						      '</div>' +
	 							'</div>' +
							'</div>'
	}
})