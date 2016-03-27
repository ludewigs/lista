angular.module('ui', [])

angular.module('ui').run(['$templateCache', function ($templateCache) {
  $templateCache.put('view/accordion.htm', '<div class="ui-accordion-title" ng-click="open(this.$id)">{{ title }}</div><div class="ui-accordion-content" ng-transclude ng-show="isOpen"></div>')
}])

angular.module('ui').directive('uiAccordions', function () {
  return {
    controller: function ($scope, $element, $attrs) {
      var accordions = []

      this.registerAccordion = function (accordion) {
        accordions.push(accordion)
      }

      this.closeAll = function (id) {
        accordions.map(function (accordion) {
          if (id === accordion.$id) {
            accordion.$id.isOpen = false
          }
          else {
            accordion.isOpen = false
          }
        })
      }
    }
  }
})

angular.module('ui').directive('uiAccordion', function () {
  return {
    templateUrl: 'view/accordion.htm',
    transclude: true,
    scope: {
      title: '@'
    },
    require: '^uiAccordions',
    link: function (scope, element, attrs, ctrl) {
      ctrl.registerAccordion(scope)
      scope.open = function (id) {
        ctrl.closeAll(id)
        scope.isOpen = !scope.isOpen
      }
    }
  }
})
