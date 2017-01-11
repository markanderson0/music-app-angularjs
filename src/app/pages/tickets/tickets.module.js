(function () {
  'use strict';

  angular.module('App.pages.tickets', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/tickets', '/tickets/topevents');  

    $stateProvider
      .state('tickets', {
        url: '/tickets',
        templateUrl: 'app/pages/tickets/tickets.html',
        controller: 'TicketsCtrl',
        controllerAs: 'tickets',
        title: 'Tickets',
        sidebarMeta: {
          icon: 'fa fa-ticket',
          order: 0,
        },
      }).state('tickets.top', {
        url: '/topevents',
        templateUrl: 'app/pages/tickets/ticketsTopEvents.html',
        controller: 'TicketsCtrl',
        controllerAs: 'tickets',
        title: 'Tickets'
      }).state('tickets.category', {
        url: '/category/:category',
        templateUrl: 'app/pages/tickets/category/ticketsCategory.html',
        controller: 'TicketsCategoryCtrl',
        controllerAs: 'ticketsCategory',
        title: 'Tickets'
      }).state('tickets.search', {
        url: '/search?query',
        templateUrl: 'app/pages/tickets/search/ticketsSearch.html',
        controller: 'TicketsSearchCtrl',
        controllerAs: 'ticketsSearch',
        title: 'Tickets'
      }).state('tickets.artist', {
        url: '/artist/:query',
        templateUrl: 'app/pages/tickets/search/ticketsSearch.html',
        controller: 'TicketsSearchCtrl',
        controllerAs: 'ticketsSearch',
        title: 'Tickets'
      });

  }

})();
