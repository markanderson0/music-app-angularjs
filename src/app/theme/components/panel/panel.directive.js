(function () {
  'use strict';

  /**
   * Includes basic panel layout inside of current element.
   */
  angular.module('App.theme')
      .directive('panel', panel);

  /** @ngInject */
  function panel(panel, $document, $window, tplSkinManager) {
    return angular.extend({}, panel, {
      link: function($scope){
        $scope.panelType = tplSkinManager.getActiveSkin().panelType;
        $scope.$on('tplSkinChanged', function(){
          $scope.panelType = tplSkinManager.getActiveSkin().panelType;
        });
      },
      template: function(el, attrs) {
        var res = '<div  class="panel {{panelType}} ' + (attrs.panelClass || '') + '" panel-blur>';
        res += panel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }

})();
