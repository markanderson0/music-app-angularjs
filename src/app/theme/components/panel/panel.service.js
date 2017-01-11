(function () {
  'use strict';

  angular.module('App.theme')
      .factory('panel', panel);

  /** @ngInject */
  function panel() {

    /** Base panel directive */
    return {
      restrict: 'A',
      transclude: true,
      template: function(elem, attrs) {
        var res = '<div class="panel-body" ng-transclude></div>';
        if (attrs.panelTitle) {
          var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.panelTitle + '</h3></div>';
          res = titleTpl + res; // title should be before
        }

        return res;
      }
    };
  }

})();
