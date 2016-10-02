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

  	var buscarProdutos = function() {
  		ProdutoService.buscarProdutos(
  			function(produtos) {
  				$scope.produtos = produtos
  				$scope.getEstrelasCheias = function(produto) {
  					return new Array(produto.nota)
  				}
  				$scope.getEstrelasVazias = function(produto) {
  					return new Array(5 - produto.nota)
  				}
  			},
  			function(erro) {
  				$scope.erro = erro
  			}
  		)
  	}

  	{
  		buscarCategorias()
  		buscarProdutos()
  	}

  }
])