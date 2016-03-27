angular.module('listaTelefonica').controller('listaTelefonicaCtrl', ['$scope', 'nomeApp', 'contatosAPI', 'serialGenerator', function ($scope, nomeApp, contatosAPI, serialGenerator) {

  $scope.appName = nomeApp.name

  var carregarContatos = function () {
    contatosAPI.getContatos().success(function (data) {
      $scope.contatos = data
    }).error(function (data, status) {
      $scope.error = 'Não foi possível carregar os dados!'
    })
  }

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato
    })
  }

  $scope.isContatoSelecionado = function (contatos) {
    if (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado
      })
    }
  }

  $scope.ordenarPor = function (campo) {
    $scope.ordem = campo
    $scope.sentido = !$scope.sentido
  }

  carregarContatos()

}])
