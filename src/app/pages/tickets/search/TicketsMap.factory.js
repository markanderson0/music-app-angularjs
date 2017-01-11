(function () {
  'use strict';

	angular.module('App.pages.tickets')
  	.factory('TicketsMap', TicketsMap);

  function TicketsMap($http, $compile, $window, TicketsSearch){
  	
  	var TicketsMap = {};

    TicketsMap.openMap = function(){
      google.maps.event.addDomListener(window, 'load', TicketsMap.initializeMap());
    }

    TicketsMap.initializeMap = function(){
      TicketsMap.tickets = TicketsSearch.tickets;

      var mapCanvas = document.getElementById('google-maps');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 2,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);

        TicketsMap.mapData = {};
        TicketsMap.mapContent = "";

        for(var i = 0; i < TicketsMap.tickets.length; i++){
          //If coords are the same as previous add event to exising content 
          if(i > 0 && TicketsMap.tickets[i-1].lat === TicketsMap.tickets[i].lat &&
            TicketsMap.tickets[i-1].lng === TicketsMap.tickets[i].lng){

            TicketsMap.mapContent = "<div>" + TicketsMap.mapContent + "<div class='bottom-border'></div></br>" +
             "<span class='map-font-weight'>" + TicketsMap.tickets[i].name + "</span>" + "</br>" + 
             "<span class='map-font-weight'>" + TicketsMap.tickets[i].date + "</span>" + "</br>" + 
             "<span class='map-font-weight'>" + TicketsMap.tickets[i].venue + "</span>" + "</br>" + 
             "<button class='btn btn-default' ng-click='openLinkFromMap("+ i +")'>Get Tickets</button></div>";

            var myLatLng = {lat: parseFloat(TicketsMap.tickets[i].lat), lng: parseFloat(TicketsMap.tickets[i].lng)};

            var marker = new google.maps.Marker({
              position: myLatLng, 
              map: map
            });

            var content = TicketsMap.mapContent;
            var complied = $compile(content)(TicketsMap);
              
            TicketsMap.infowindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker, 'click', (function(marker, content, TicketsMap){
              return function(){
                TicketsMap.infowindow.setContent(content);
                TicketsMap.infowindow.open(map, marker);
              }
            })(marker, complied[0], TicketsMap));
          }
          else{
            var myLatLng = {lat: parseFloat(TicketsMap.tickets[i].lat), lng: parseFloat(TicketsMap.tickets[i].lng)};

            var marker = new google.maps.Marker({
              position: myLatLng, 
              map: map
            });

            var content = "<div><span class='map-font-weight'>" + TicketsMap.tickets[i].name + "</span>" + 
            "</br>" + "<span class='map-font-weight'>" + TicketsMap.tickets[i].date + "</span>" + "</br>" + 
            "<span class='map-font-weight'>" + TicketsMap.tickets[i].venue + "</span>" + "</br>" + 
            "<button class='btn btn-default' ng-click='openLinkFromMap("+i+")'>Get Tickets</button></div>";

            var complied = $compile(content)(TicketsMap);
            TicketsMap.mapContent = content;            
            TicketsMap.infowindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker, 'click', (function(marker, content, TicketsMap){
              return function(){
                TicketsMap.infowindow.setContent(content);
                TicketsMap.infowindow.open(map, marker);
              }
            })(marker, complied[0], TicketsMap));
          } 
        }

    }

    TicketsMap.openLinkFromMap = function (index){
      var url = TicketsMap.tickets[index].url;
        $window.open(url);
    }

  	return TicketsMap;
  }	

})();    	