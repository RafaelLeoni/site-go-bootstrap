angular.module('BancaStoreService')

.factory('DetalheService', [
  '$http',
  '$rootScope', 
  function($http,$rootScope) {

  	function DetalheServiceObject() {

  		var self = this

  		var buscarDetalheProduto = function(produtoId,success,error) {
  			$http({
          method: 'GET',
          url: '/banca/produto/detalhe/produtoId',
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

  }
])