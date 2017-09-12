angular.module('video-player')
  .component('app', {

    controller: function(youTube) {

      this.searchYoutube = function() {
        // youTube.searchYouTube(searchQuery);
        console.log('searchYoutube called');
      }

      this.videos = window.exampleVideoData;
      this.currVideo = window.exampleVideoData[0];

      this.setCurrVideo = function(videoObj) {
        this.currVideo = videoObj.video;
      };
      
    },

    templateUrl: 'src/templates/app.html'
  });
