angular.module('listaTelefonica').directive('uiAlert', function () {

  return {
    templateUrl: 'view/alert.htm',
    replace: true,
    restrict: 'AE',
    scope: {
      title: '@'
    },
    transclude: true
  }

})
