(function () {
  'use strict';

  angular.module('App.pages.merch', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('merch', {
          url: '/merch',
          templateUrl: 'app/pages/merch/merch.html',
          controller: 'MerchCtrl',
          controllerAs: 'merch',
          title: 'Merch',
          sidebarMeta: {
            icon: 'fa fa-shopping-cart',
            order: 0,
          },
        }).state('merch.category', {
          url: '/category/:category',
          templateUrl: 'app/pages/merch/list/merchList.html',
          controller: 'MerchListCtrl',
          controllerAs: 'merchList',
          title: 'Merch'
        }).state('merch.search', {
          url: '/search?query',
          templateUrl: 'app/pages/merch/list/merchList.html',
          controller: 'MerchListCtrl',
          controllerAs: 'merchList',
          title: 'Merch'
        }).state('merch.product', {
          url: '/product/:id',
          templateUrl: 'app/pages/merch/product/merchProduct.html',
          controller: 'MerchProductCtrl',
          controllerAs: 'merchProduct',
          title: 'Merch'
        });
  }

})();
