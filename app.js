const app = Vue.createApp({
  data() {
    return {
      isOn: false,
      isPlaying: false,
      currentVideo: 0,
      videos: [
        'screen.png',
        'cars.mp4',
        'soccer.mp4',
        'food.mp4',
      ],
    };
  },
  computed: {
    videoSource() {
      return this.videos[this.currentVideo];
    },
  },
  methods: {
    togglePower() {
      this.isOn = !this.isOn;
      if (!this.isOn) {
        this.isPlaying = false;
      }
    },
    togglePlayPause() {
      if (this.isOn) {
        this.isPlaying = !this.isPlaying;
        const videoElement = document.querySelector('video');
        if (this.isPlaying) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    },
    changeVideo(step) {
      if (this.isOn) {
        this.currentVideo = (this.currentVideo + step + this.videos.length) % this.videos.length;
        this.isPlaying = true;
        const videoElement = document.querySelector('video');
        videoElement.load();
        videoElement.play();
      }
    },
  },
});

app.mount('#app');