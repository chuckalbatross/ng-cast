angular.module('video-player')

.component('app', {

  // bindings: {
    // testVideos: '<'
  // },

  controller: function() {
    var ctrl = this;
    this.videos = window.exampleVideoData;

    this.currVideo = window.exampleVideoData[0];

    ctrl.setCurrVideo = function(passedVideo) {
      console.log('setCurrVideo Called');
      debugger;
      this.currVideo = passedVideo;
    };
  },

  templateUrl: 'src/templates/app.html'
});
