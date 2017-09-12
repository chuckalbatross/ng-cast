angular.module('video-player')

.component('app', {

  controller: function() {
    var ctrl = this;
    this.videos = window.exampleVideoData;

    this.currVideo = window.exampleVideoData[0];

    ctrl.setCurrVideo = function(videoObj) {
      console.log('setCurrVideo Called');
      debugger;
      this.currVideo = videoObj.video;
    };
  },

  templateUrl: 'src/templates/app.html'
});
