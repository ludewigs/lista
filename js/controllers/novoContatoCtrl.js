angular.module('listaTelefonica').controller('novoContatoCtrl', ['$scope', '$location', 'nomeApp', 'contatosAPI', 'operadorasAPI', 'serialGenerator', 'operadoras', function ($scope, $location, nomeApp, contatosAPI, operadorasAPI, serialGenerator, operadoras) {

  $scope.operadoras = operadoras.data
  $scope.appName = nomeApp.name

  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate()
    contato.data = new Date()
    contatosAPI.saveContato(contato).success(function (data) {
      // $scope.contatos.push(angular.copy(contato))
      delete $scope.contato
      $scope.contatoForm.$setPristine()
      $location.path('/contatos')
    })
  }

}])
