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

    $scope.items = [
    	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 1'},
    	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 2'},
    	{src: 'public/fonts/image/carousel-item.png', description: 'Imagem 3'}
    ]

  }
])