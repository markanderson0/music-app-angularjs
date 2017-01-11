(function(){
	'use strict';

	angular.module('App.pages.tickets')
		.controller('TicketsCategoryCtrl', TicketsCategoryCtrl);

	function TicketsCategoryCtrl($state, TicketsGenres, TicketsCategory){

		var vm = this;

		vm.ticket = {};
		vm.ticketsCat = TicketsGenres.getTicketCats();

    var searchTerm = TicketsGenres.getTicketSearch($state.params.category, 'label')	  
    vm.category = TicketsGenres.getTicketName($state.params.category, 'label');   

		vm.eventArtists = [];
		vm.topEvents = [];

    TicketsCategory.getCatEvents(TicketsGenres.getTicketEventSearch(searchTerm, 'search'), 0).then(function(artist){
    	vm.eventArtists = artist;
    });
    TicketsCategory.getFeatured(TicketsGenres.getTicketApiCode(searchTerm, 'search'), TicketsGenres.getTicketGenre(searchTerm, 'search'), "").then(function(topEvents){
    	vm.topEvents = topEvents;
  	});

		vm.getMoreResults = function(){
			TicketsCategory.getMoreResults();
		}
	}	
})();