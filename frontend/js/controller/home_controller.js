angular.module("BancaStoreController")

.controller("HomeController", function($scope) {
  $scope.records = [
  	'public/fonts/image/home-icon.png',
    'public/fonts/image/about-us-icon.png',
    'public/fonts/image/newspaper-icon.png',
    'public/fonts/image/contact-icon.png'
  ]

  $scope.items = [
  	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 1'},
  	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 2'},
  	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 3'}
  ]

})