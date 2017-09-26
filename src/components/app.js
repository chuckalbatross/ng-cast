//ES5: const angular = require('angular');
import angular from 'angular';

angular.module('video-player')
  .component('app', {

    controller: function(youTube) {

      var cntx = this;
      this.searchYoutube = function(searchObj) {
        youTube.searchYouTube(searchObj)
          .then(function successCallback(response) {
            console.log('Success');
            // debugger;
            cntx.videos = response.data.items;
            cntx.currVideo = cntx.videos[0];
            console.log(this.currVideo);
          }, function errorCallback(response) {
            console.log('Failure');
            debugger;
          });
      };

      // debugger;

      this.videos = window.exampleVideoData;
      this.currVideo = window.exampleVideoData[0];

      this.setCurrVideo = function(videoObj) {
        this.currVideo = videoObj.video;
      };
      
    },

    templateUrl: 'src/templates/app.html'
  });
