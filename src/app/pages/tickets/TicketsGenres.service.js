(function () {
  'use strict';

	angular.module('App.pages.tickets')
  	.service('TicketsGenres', TicketsGenres);

	/** @ngInject */
	function TicketsGenres(){
  	var ticketsCat = [{
		label: 'alt&indie',
      	name: 'Alt / Indie',
      	search: 'alt',
      	apiCode: 'XXXXX',
      	genre: 'alternative',
      	eventSearch: 'alternative rock'
    }, {
      	label: 'clubs&dance',
      	name: 'Clubs / Dance',
      	search: 'elect',
      	apiCode: 'XXXXX',
      	genre: 'electronic-dance-techno',
      	eventSearch: 'dance / electronic'
    }, {
      	label: 'counrty&folk',
      	name: 'Country / Folk',
      	search: 'folk',
      	apiCode: 'XXXXX',
      	genre: 'country-folk',
      	eventSearch: 'country'
    }, {
      	label: 'festivals',
      	name: 'Festivals',
      	search: 'fest',
      	apiCode: 'XXXXX',
      	genre: 'concerts',
      	eventSearch: 'festival'
    }, {
      	label: 'hardrock&metal',
      	name: 'Hard Rock / Metal',
      	search: 'hard-rock',
      	apiCode: 'XXXXX',
      	genre: 'hard-rock-metal-punk',
      	eventSearch: 'metal'
    }, {
      	label: 'jazz&blues',
      	name: 'Jazz / Blues',
      	search: 'blues',
      	apiCode: 'XXXXX',
      	genre: 'jazz-and-blues',
      	eventSearch: 'jazz / blues'
    }, {
      	label: 'rnb&urban',
      	name: 'R&B / Urban',
      	search: 'rnb',
      	apiCode: 'XXXXX',
      	genre: 'randb-and-soul',
      	eventSearch: 'r&b / soul'
    }, {
      	label: 'rap&hiphop',
      	name: 'Rap / Hip-Hop',
      	search: 'rap',
      	apiCode: 'XXXXX',
      	genre: 'rap-and-hip-hop',
      	eventSearch: 'rap / hip hop'
    }, {
      	label: 'rock&pop',
      	name: 'Rock / Pop',
      	search: 'rock',
      	apiCode: 'XXXXX',
      	genre: 'rock-and-pop',
      	eventSearch: 'rock / pop'
    }, {
      	label: 'world',
      	name: 'World',
      	search: 'world',
      	apiCode: 'XXXXX',
      	genre: 'world-and-latin-music-tickets',
      	eventSearch: 'world'
    }];

    return{
    	getTicketCats : function(){
    		return ticketsCat;
    	},
    	getTicketLabel : function(val, key){
    		return ticketsCat.find(function(ticket){
    			return ticket[key] === val;
    		}).label;
    	},
    	getTicketName : function(val, key){
    		return ticketsCat.find(function(ticket){
    			return ticket[key] === val;
    		}).name;
    	},
    	getTicketSearch : function(val, key){
    		return ticketsCat.find(function(ticket){
    			return ticket[key] === val;
    		}).search;
    	},	    	
    	getTicketApiCode : function(val, key){
    		return ticketsCat.find(function(ticket){
    			return ticket[key] === val;
    		}).apiCode;
    	},
    	getTicketGenre : function(val, key){
    		return ticketsCat.find(function(ticket){
    			return ticket[key] === val;
    		}).genre;
    	},
    	getTicketEventSearch : function(val, key){
    		return ticketsCat.find(function(ticket){
    			return ticket[key] === val;
    		}).eventSearch;
    }
	}
}

})();