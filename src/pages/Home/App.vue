<template>
  <div id="app">
    <home-menu></home-menu>
    <social-media></social-media>
    <sound-on-off></sound-on-off>
    <home-slider></home-slider>
  </div>
</template>

<script>
import HomeMenu from '@/components/HomeMenu.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import SoundOnOff from '@/components/SoundOnOff.vue';
import Slider from '@/components/Slider.vue';

export default {
  name: 'home-app',
  components: {
    homeMenu: HomeMenu,
    socialMedia: SocialMedia,
    soundOnOff: SoundOnOff,
    homeSlider: Slider,
  },
};
</script>

<style lang="scss">

body:before {
  top: 0;
  z-index: 0 !important;
}

</style>
