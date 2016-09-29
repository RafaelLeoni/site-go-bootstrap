angular.module("BancaStoreController")

.controller("HomeController", function($scope) {
  $scope.records = [
  	{src: 'public/fonts/image/livros.png', title: 'Livros', description: 'Encontre seu livro aqui'},
    {src: 'public/fonts/image/revistas.png', title: 'Revistas', description: 'Encontre sua revista aqui'},
    {src: 'public/fonts/image/quadrinhos.png', title: 'Quadrinhos', description: 'Encontre seu quadrinho aqui'},
    {src: 'public/fonts/image/jornal.png', title: 'Jornais', description: 'Encontre seu jornal aqui'}
  ]

  $scope.items = [
  	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 1'},
  	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 2'},
  	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 3'}
  ]

})