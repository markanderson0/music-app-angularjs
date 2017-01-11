(function () {
  'use strict';

  angular.module('App.pages.profile.upload')
    .controller('UploadCtrl', UploadCtrl);

  /** @ngInject */
  function UploadCtrl($scope, $state, $window, $uibModal, Upload, UploadDetails, ArtistShows, ArtistVideos, toastr) {

    var vm = this;

    vm.selectedSongs = [];
    vm.currentArtist = "";
    var changed = false;
    var mbid = "";
    vm.isCollapsed = false;
    vm.responsive = ArtistVideos.getSlickResponsive();
    vm.hour = 0;
    vm.minute = 0;
    vm.second = 0;
    vm.selectedSong = "";
    vm.submitted = false;
    vm.invalidHour = false;
    vm.invalidMinute = false;
    vm.invalidSecond = false;

    vm.videos = ArtistVideos.getUserVideos("testUser1");

    if($state.current.name === "profile.upload"){
      vm.upload = true;
    }
    else if($state.current.name === "profile.upload.uploads"){
      vm.uploads = true;
    }

    vm.uploadFiles = function(file, errFiles){
      vm.file = file;
      //vm.errFile = errFiles && errFiles[0];
    }

    vm.artistChange = function(artistName){
      vm.clearSongs();
      ArtistShows.getName(artistName).then(function(name){
        ArtistShows.getArtist(name).then(function(artistMbid){
          mbid = artistMbid;
          if(!angular.isUndefined(vm.eventYear)){
            if(vm.eventYear.length === 4){
              vm.getEvent(vm.eventYear, mbid);
            }
          }  
        });        
      });
    }

    vm.getEvent = function(eventYear) {  
      vm.clearSongs();
      if(angular.isUndefined(mbid) || mbid.length === 0){
        vm.events = [];
      }  
      else{
        if(!angular.isUndefined(eventYear)){
          if(eventYear.length === 4){ 
            UploadDetails.getEvent(eventYear, mbid).then(function(events){
              vm.events = events;
            });    
          }
        }  
      }
    };

    vm.getSongs = function(event) {
      vm.clearSongs();
      if(!angular.isUndefined(event)){
        UploadDetails.getSongs(event).then(function(songs){
          vm.songs = songs;
        })
      }  
    };

    vm.addSong = function(song){
      UploadDetails.selectedSongs.push(song); 
      vm.selectedSongs = UploadDetails.selectedSongs;
    }

    vm.getSelectedSongs = function(){
        vm.selected = "";
        for(var i = 0; i < vm.selectedSongs.length; i++){
          vm.selected = "";
          vm.selected = vm.selected.concat(" " + vm.selectedSongs[i] + ", ");
        }
        vm.selected = vm.selected.substring(1, vm.selected.length-2);
        return vm.selected;
    }

    vm.clearSongs = function(){
      vm.songs = [];
      vm.selectedSong = "";
      vm.selectedSongs = [];
      vm.selected = "";
    }

    vm.modelOptions = {
      debounce: {
        default: 1000,
        blur: 250
      },
      getterSetter: true
    };

    vm.submitVideo = function(){
      vm.videoSubmitted = true;
      if(vm.file.name.length > 0 && vm.artist.length > 0 
        && vm.eventYear.length > 0 && vm.selectedEvent.length > 0
        && vm.selected.length > 0){
        vm.openConfirmModal();
      }
    }

    vm.resetUploadValues = function(){
      vm.clearSongs();
      vm.file = "";
      vm.artist = "";
      vm.eventYear = "";
      vm.events = [];
    }
    
    /** Modal **/
    vm.openConfirmModal = function () {
      $scope.file = vm.file;
      $scope.artist = vm.artist;
      $scope.eventYear = UploadDetails.eventYear;
      $scope.selectedEvent = UploadDetails.selectedEvent;
      $scope.selected = vm.selected;
      vm.confirmUpload = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/profile/upload/uploadModal.html',
        controller: UploadCtrl,
        scope: $scope,
        size: "md",
        resolve: {
          file: function () { return $scope.file; },
          artist: function () { return $scope.artist; },
          eventYear: function () { return $scope.eventYear; },
          selectedEvent: function () { return $scope.selectedEvent; },
          selected: function () { return $scope.selected; },
        }
      });
    }

    vm.submitVideoModal = function(){
      vm.videoModalSubmitted = true;
      if(vm.terms){
        vm.confirmUploadMessage();
        vm.resetUploadValues();
        vm.confirmUpload.close();
        vm.videoSubmitted = false;
        vm.videoModalSubmitted = false;
      }    
    }

    vm.confirmUploadMessage = function() {
      toastr.success('The video has been uploaded');
    };


        /** Modal **/
    vm.openEditVideoModal = function (songs, videoId) {
      $scope.songs = songs;
      $scope.videoId = videoId;
      $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/profile/upload/editVideoModal.html',
        controller: UploadCtrl,
        scope: $scope,
        size: "md",
        resolve: {
          songs: function () { return $scope.songs; },
          videoId: function () { return $scope.videoId; },
        }
      });
    }

            /** Modal **/
    vm.openConfirmDeleteModal = function (songs, videoId) {
      $scope.videoId = videoId;
      $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/profile/upload/confirmDeleteModal.html',
        controller: UploadCtrl,
        scope: $scope,
        size: "md",
        resolve: {
          songs: function () { return $scope.songs; },
          videoId: function () { return $scope.videoId; },
        }
      });
    }

    vm.confirmDeleteMessage = function() {
      vm.resetCuePointValues();
      toastr.error('The video has been deleted');
    };

    vm.setCuePoints = function(){
      vm.submitted = true;
      vm.checkSong();
      if(!vm.noSongSelected){
        vm.confirmCuePointMessage(vm.selectedSong);
        vm.resetCuePointValues();
      }
    }

    vm.confirmCuePointMessage = function(song) {
      toastr.success('Cue point has been added to ' + song + '.');
    };

    vm.checkSong = function(){
       if(vm.selectedSong === ""){
        vm.noSongSelected = true;
      }
      else{
        vm.noSongSelected = false;
      }     
    }

    vm.checkTime = function(){
      if(angular.isUndefined(vm.hour)){
        vm.invalidHour = true;
      }
      else{
        vm.invalidHour = false;
      }
      if(angular.isUndefined(vm.minute)){
        vm.invalidMinute = true;
      }
      else{
        vm.invalidMinute = false;
      }
      if(angular.isUndefined(vm.second)){
        vm.invalidSecond = true;
      }
      else{
        vm.invalidSecond = false;
      }
    }

    vm.resetCuePointValues = function(){
      vm.hour = 0;
      vm.minute = 0;
      vm.second = 0;       
      vm.selectedSong = "";
      vm.noSongSelected = false;
      vm.invalidHour = false;
      vm.invalidMinute = false;
      vm.invalidSecond = false;
    }
  }

})();