(function(){
	'use strict';

	angular.module('App.pages.tickets')
		.controller('TicketsCtrl', TicketsCtrl);

	function TicketsCtrl($state, TicketsGenres, TicketsCategory){

		var vm = this;

		vm.ticket = {};
		vm.ticketsCat = TicketsGenres.getTicketCats();

		vm.topEvents = [];
		if(angular.isUndefined($state.params.category)){
	    TicketsCategory.getFeatured("XXXXX", "concerts", "home").then(function(item){
	    	vm.topEvents = item;
	    });
	  }  
	}	
})();