angular.module('BancaStoreController')

.controller('ProdutosController', [
  '$scope',
  '$rootScope',
  'ProdutoService',
  function($scope,$rootScope,ProdutoService) {

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
          $scope.backupProdutos = produtos
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

    $scope.open = function(produto) {
      $rootScope.produtoId = produto.nome
      $('#detalheModal').modal()
    }

    $scope.filtrar = function() {
      var filtro = []
      $scope.produtos = $scope.backupProdutos
      for (produto of $scope.produtos) {
        if (produto.nome.toLowerCase().includes($scope.query.toLowerCase()))
          filtro.push(produto)
      }
      $scope.produtos = filtro
    }

  	{
  		buscarCategorias()
  		buscarProdutos()
  	}

  }
])