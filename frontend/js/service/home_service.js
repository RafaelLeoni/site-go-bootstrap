angular.module('BancaStoreService')

.factory('HomeService', [
  '$http',
  '$rootScope',
  function($http,$rootScope) {

  	function HomeServiceObject() {

  		var self = this

  		self.buscarImagens = function(success,error) {
  			$http({
  				method: 'GET',
          url: '/banca/home/imagens',
          cache: false,
          responseType: 'json'
  			})
  			.success(function(data,status,headers,config) {
  				
  				if (data.erro != null) {
  					error(data.erro)
  				} else if (data.resposta == null) {
            error('NULL response.')
          } else {
          	success(data.imagens)
          }

  			})
  			.error(function(data,status,headers,config) {
  				error('AJAX ERROR:\n' + config.method + ': ' + config.url + '\nstatus: ' + status + '\nresponse: ' + angular.toJson(data, true))
  			})

  		}

  	}

  	return new HomeServiceObject()

  }
])