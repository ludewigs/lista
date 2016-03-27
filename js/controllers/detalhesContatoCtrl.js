angular.module('listaTelefonica').controller('detalhesContatoCtrl', ['$scope', 'nomeApp', '$routeParams', 'contato', function ($scope, nomeApp, $routeParams, contato) {
  $scope.appName = nomeApp.name
  $scope.contato = contato.data
}])
