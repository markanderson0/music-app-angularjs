(function(){
	'use strict';

	angular.module('App.pages.tickets')
		.controller('TicketsSearchCtrl', TicketsSearchCtrl);

	function TicketsSearchCtrl($state, $window, $compile, TicketsSearch, TicketsMap){

		var vm = this;

		vm.ticket = {};
		vm.showList = true;
		vm.showMap = false;

		vm.search = $state.params.query;

		TicketsSearch.searchEvents(vm.search).then(function(item){
			vm.tickets = item;
			if(vm.showMap){
        vm.openMap();
      }
		});

		vm.openLink = function (url){
  		$window.open(url);
		}

		vm.openLinkFromMap = function (index){
			var url = vm.tickets[index].url;
  			$window.open(url);
		}

		vm.openList = function(){
			vm.showList = true;
			vm.showMap = false;
		}

		vm.openMap = function(){
			vm.showList = false;
			vm.showMap = true;
			//MOVE TO TICKETSMAP
			function initialize() {
	    	var mapCanvas = document.getElementById('google-maps');
	      	var mapOptions = {
	        	center: new google.maps.LatLng(44.5403, -78.5463),
	        	zoom: 2,
	        	mapTypeId: google.maps.MapTypeId.ROADMAP
	      	};

	      	var map = new google.maps.Map(mapCanvas, mapOptions);

	      	vm.mapData = {};
	      	vm.mapContent = "";

	      	for(var i = 0; i < vm.tickets.length; i++){
	      		//If coords are the same as previous add event to exising content 
	      		if(i > 0 && vm.tickets[i-1].lat === vm.tickets[i].lat &&
	      		   vm.tickets[i-1].lng === vm.tickets[i].lng){

	      			vm.mapContent = "<div>" + vm.mapContent + "<div class='bottom-border'></div></br>" +
	      			"<span class='map-font-weight'>" + vm.tickets[i].name + "</span>" + "</br>" + 
	      			"<span class='map-font-weight'>" + vm.tickets[i].date + "</span>" + "</br>" + 
	      			"<span class='map-font-weight'>" + vm.tickets[i].venue + "</span>" + "</br>" + 
	      			"<button class='btn btn-default' ng-click='tickets.openLinkFromMap("+ i +")'>Get Tickets</button></div>";

	      			var myLatLng = {lat: parseFloat(vm.tickets[i].lat), lng: parseFloat(vm.tickets[i].lng)};

		        	var marker = new google.maps.Marker({
		          		position: myLatLng, 
		          		map: map
		        	});

		      		var content = vm.mapContent;

		      		var complied = $compile(content)(vm);
		      		
		      		vm.infowindow = new google.maps.InfoWindow();

		      		google.maps.event.addListener(marker, 'click', (function(marker, content, vm){
		      			return function(){
		      				vm.infowindow.setContent(content);
		      				vm.infowindow.open(map, marker);
		      			}
		      		})(marker, complied[0], vm));
	      		}
	      		else{
	      			var myLatLng = {lat: parseFloat(vm.tickets[i].lat), lng: parseFloat(vm.tickets[i].lng)};

		        	var marker = new google.maps.Marker({
		          		position: myLatLng, 
		          		map: map
		        	});

		      		var content = "<div><span class='map-font-weight'>" + vm.tickets[i].name + "</span>" + 
		      		"</br>" + "<span class='map-font-weight'>" + vm.tickets[i].date + "</span>" + "</br>" + 
		      		"<span class='map-font-weight'>" + vm.tickets[i].venue + "</span>" + "</br>" + 
		      		"<button class='btn btn-default' ng-click='tickets.openLinkFromMap("+i+")'>Get Tickets</button></div>";

		      		var complied = $compile(content)(vm);

		      		vm.mapContent = content;
		      		
		      		vm.infowindow = new google.maps.InfoWindow();

		      		google.maps.event.addListener(marker, 'click', (function(marker, content, vm){
		      			return function(){
		      				vm.infowindow.setContent(content);
		      				vm.infowindow.open(map, marker);
		      			}
		      		})(marker, complied[0], vm));
	      		}	
	      	}
		    }

		    google.maps.event.addDomListener(window, 'load', initialize());
		}
	}	
})();