angular.module('BancaStoreController')

.controller('DetalheController', [
  '$scope',
  '$rootScope',
  'DetalheService',
  function($scope,$rootScope,DetalheService) {

  	var buscarDetalheProduto = function(produtoId) {
  		DetalheService.buscarDetalheProduto(produtoId,
  			function(produto) {
  				$scope.produto = produto
  			},
  			function(erro) {
  				$scope.erro = erro
  			}
  		)
  	}

  	{
  		buscarDetalheProduto($rootScope.produtoId)
  	}

  }
])