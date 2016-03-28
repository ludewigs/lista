angular.module('listaTelefonica').service('operadorasAPI', ['$http', 'backend', function ($http, backend) {

  this.getOperadoras = function () {
    return $http.get(backend.baseUrl + '/operadoras')
  }

}])
