(function () {
  'use strict';

  angular.module('App.theme')
      .directive('panelBlur', panelBlur);

  /** @ngInject */
  function panelBlur(panelBlurHelper, $window, $rootScope) {
    var bodyBgSize;

    panelBlurHelper.bodyBgLoad().then(function() {
      bodyBgSize = panelBlurHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function() {
      bodyBgSize = panelBlurHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: function($scope, elem) {
        if(!$rootScope.$isMobile) {
          panelBlurHelper.bodyBgLoad().then(function () {
            setTimeout(recalculatePanelStyle);
          });
          $window.addEventListener('resize', recalculatePanelStyle);

          $scope.$on('$destroy', function () {
            $window.removeEventListener('resize', recalculatePanelStyle);
          });
        }

        function recalculatePanelStyle() {
          if (!bodyBgSize) {
            return;
          }
          elem.css({
            backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
            backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
          });
        }

      }
    };
  }

})();
