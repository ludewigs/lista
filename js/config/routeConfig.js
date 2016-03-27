angular.module('listaTelefonica').config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/contatos', {
      templateUrl: 'view/contatos.htm',
      controller: 'listaTelefonicaCtrl'
      // resolve: {
      //   contatos: function (contatosAPI) {
      //     return contatosAPI.getContatos()
      //   }
      // }
    })
    .when('/novoContato', {
      templateUrl: 'view/novoContato.htm',
      controller: 'novoContatoCtrl',
      resolve: {
        operadoras: function (operadorasAPI) {
          return operadorasAPI.getOperadoras()
        }
      }
    })
    .when('/detalhesContato/:id', {
      templateUrl: 'view/detalhesContato.htm',
      controller: 'detalhesContatoCtrl',
      resolve: {
        contato: function (contatosAPI, $route) {
          return contatosAPI.getContato($route.current.params.id)
        }
      }
    })
    .otherwise({
      redirectTo: '/contatos'
    })

}])
