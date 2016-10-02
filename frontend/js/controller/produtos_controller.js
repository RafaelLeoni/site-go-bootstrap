angular.module('BancaStoreController')

.controller('ProdutosController', [
  '$scope',
  '$routeParams',
  'ProdutoService',
  function($scope,$routeParams,ProdutoService) {

  	var buscarCategorias = function() {
  		ProdutoService.buscarCategorias(
  			function(categorias) {
  				$scope.categorias = categorias
  			},
  			function(erro) {
  				$scope.erro = erro
  			}
  		)
  	}

  	{
  		buscarCategorias()
  	}

  }
])