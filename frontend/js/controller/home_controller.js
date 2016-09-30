angular.module('BancaStoreController')

.controller('HomeController', [
  '$scope',
  '$routeParams',
  'HomeService',
  function($scope,$routeParams,HomeService) {

    var buscarItems = function() {
      HomeService.buscarItems(
        function(items) {
          $scope.items = items
        },

        function(erro) {
          $scope.erro = erro
        }
      )
    }

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
      buscarItems()
      buscarImagens()
    }

  }
])