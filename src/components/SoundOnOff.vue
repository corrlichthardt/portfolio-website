<template>
  <div class="sound-wrapper">
    <div class="togglesound-text">
      <a v-on:click="play" type="button">sound on/off</a>
    </div>
    <audio ref="audioElm" v-bind:src="track" loop></audio>
  </div>
</template>

<script>
const trackOne = require('@/assets/atmospheric-timelapse.mp3');

export default {
  data() {
    return {
      track: trackOne,
    };
  },
  mounted() {
    this.$watch('track', function () {
      this.$refs.player.load();
    });
  },
  methods: {
    play(event) {
      const a = this.$refs.audioElm;
      if (a.paused) {
        a.play();
      } else {
        a.pause();
      }
    },
  },
};
</script>

<style lang="scss">
$gold: #cc9504;

.togglesound-text {
  z-index: 20;
  font-family: "Overpass Mono", monospace;
  font-size: 12px;
  position: fixed;
  top: 1.3em;
  right: 45px;

  a {
    color: black;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: $gold;
      cursor: pointer;
      text-decoration: line-through;
    }
  }
}
</style>
