angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<'
  },

  controller: function() {
    // var videoListCtrl = this;
    // this.testVideos = window.exampleVideoData;
    // debugger;
    this.onClick = function() {
      console.log(this.video);
    };
  },

  templateUrl: 'src/templates/videoList.html'

});


