angular.module('listaTelefonica').factory('contatosAPI', ['$http', 'backend', function ($http, backend) {
  var _getContatos = function () {
    return $http.get(backend.baseUrl + '/contatos')
  }
  var _getContato = function (id) {
    return $http.get(backend.baseUrl + '/contatos/' + id)
  }
  var _saveContato = function (contato) {
    return $http.post(backend.baseUrl + '/contatos', contato)
  }

  return {
    getContatos: _getContatos,
    getContato: _getContato,
    saveContato: _saveContato
  }

}])
