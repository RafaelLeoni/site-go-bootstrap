angular.module('BancaStoreService')

.factory('ProdutoService', [
  '$http',
  function($http) {

  	function ProdutoServiceObject() {

  		var self = this

  		self.buscarCategorias = function(success,error) {
  			$http({
          method: 'GET',
          url: '/banca/produtos/categorias',
          cache: false,
          responseType: 'json'
        })
        .success(function(data,status,headers,config) {
          
          if (data.erro != null) {
            error(data.erro)
          } else if (data.length == 0) {
            error('NULL response.')
          } else {
            success(data)
          }

        })
        .error(function(data,status,headers,config) {
          error('AJAX ERROR:\n' + config.method + ': ' + config.url + '\nstatus: ' + status + '\nresponse: ' + angular.toJson(data, true))
        })
  		}

  		self.buscarProdutos = function(success,error) {
  			$http({
          method: 'GET',
          url: '/banca/produtos/produtos',
          cache: false,
          responseType: 'json'
        })
        .success(function(data,status,headers,config) {
          
          if (data.erro != null) {
            error(data.erro)
          } else if (data.length == 0) {
            error('NULL response.')
          } else {
            success(data)
          }

        })
        .error(function(data,status,headers,config) {
          error('AJAX ERROR:\n' + config.method + ': ' + config.url + '\nstatus: ' + status + '\nresponse: ' + angular.toJson(data, true))
        })
  		}

  	}

  	return new ProdutoServiceObject()
  }
])