angular.module('BancaStoreController')

.controller('HomeController', [
  '$scope',
  '$routeParams',
  'HomeService',
  function($scope,$routeParams,HomeService) {

    var buscarImagens = function() {

      HomeService.buscarImagens(

        function(imagens) {
          $scope.imagens = imagens
        },

        function(erro) {
          $scope.erro = erro
        }

      )

    }

    {
      buscarImagens()
    }

    // $scope.imagens = [
    // 	{url: 'public/fonts/image/livros.png', titulo: 'Livros', descricao: 'Encontre seu livro aqui'},
    //   {url: 'public/fonts/image/revistas.png', titulo: 'Revistas', descricao: 'Encontre sua revista aqui'},
    //   {url: 'public/fonts/image/quadrinhos.png', titulo: 'Quadrinhos', descricao: 'Encontre seu quadrinho aqui'},
    //   {url: 'public/fonts/image/albuns.png', titulo: 'Albuns e Figurinhas', descricao: 'Encontre seu álbum aqui'}
    // ]

    $scope.items = [
    	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 1'},
    	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 2'},
    	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 3'}
    ]

  }
])