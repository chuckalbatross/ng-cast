angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<',
    //nameVideo: '<'
  },

  controller: function() {
    // var entryCtrl = this;

    // entryCtrl.$onInit = function() {
    //   console.log('on init');
    //   console.log(entryCtrl);
    // };
    // this.testVideo = ;
    // debugger;
    // var ctrl = this;
    this.onClick = function() {
      console.log(this.video);
    };

    // console.log(this.testVideo);
    // this.testVideo = testVideo;
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
