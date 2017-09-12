angular.module('video-player')

.component('videoPlayer', {

  bindings: {
    videoPlay: '<'
  },

  controller: function() {
    // this.$onInit = function () {
    //   console.log(this.videoPlay);
    // };
    this.getIFrameSrc = function(videoId) {
      return 'https://www.youtube.com/embed/' + videoId;
    };
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
