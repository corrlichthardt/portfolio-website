<template>
  <div id="portfolio-app">
    <mini-menu></mini-menu>
    <social-media></social-media>
    <sound-on-off></sound-on-off>

    <!-- Slider Wrapper -->
    <div class="css-slider-wrapper">
      <input type="radio" name="slider" class="slide-radio1" checked id="slider_1">
      <input type="radio" name="slider" class="slide-radio2" id="slider_2">
      <input type="radio" name="slider" class="slide-radio3" id="slider_3">
      <input type="radio" name="slider" class="slide-radio4" id="slider_4">

      <!-- Slider Pagination -->
      <div class="slider-pagination">
        <label for="slider_1" class="page1">1</label>
        <label for="slider_2" class="page2">2</label>
        <input
        id="cta-portfolio"
          class="gallery-button"
          type="button"
          value="View Photography >"
          onclick="window.location.href='gallery.html'"
        >
      </div>

      <!-- Slider #1 -->
      <div class="slider slide-1">
        <ul class="gallery">
          <li>
            <figure class="snip1295">
              <img src="../../assets/screen1.jpg" alt="sample68">
              <a href="/avatar.html" target="_blank"></a>
            </figure>
          </li>
          <li>
            <figure class="snip1295">
              <img src="../../assets/screen2.jpg" alt="sample68">
              <a href="https://mw-website-190211.firebaseapp.com/index.html" target="_blank"></a>
            </figure>
          </li>
        </ul>
      </div>

      <!-- Slider #2 -->
      <div class="slider slide-2">
        <ul class="gallery">
          <li>
            <figure class="snip1295">
              <img src="../../assets/screen3.jpg" alt="sample68">
              <a href="https://www.mothershipvfx.com/" target="_blank"></a>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MiniMenu from '@/components/MiniMenu.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import SoundOnOff from '@/components/SoundOnOff.vue';

export default {
  name: 'portfolio-app',
  components: {
    miniMenu: MiniMenu,
    socialMedia: SocialMedia,
    soundOnOff: SoundOnOff,
  },
  methods: {
    sliderGallery2() {
      const TIMEOUT = 6000;

      const interval = setInterval(handleNext, TIMEOUT);

      function handleNext() {
        const $radios = $('input[class*=&quot;slide-radio&quot;]');
        const $activeRadio = $('input[class*=&quot;slide-radio&quot;]:checked');

        let currentIndex = $activeRadio.index();
        const radiosLength = $radios.length;

        $radios.attr('checked', false);

        if ((currentIndex = radiosLength - 1)) {
          $radios.first().attr('checked', true);
        } else {
          $activeRadio
            .next('input[class*=&quot;slide-radio&quot;]')
            .attr('checked', true);
        }
      }
    },
    beforeMount() {
      this.sliderGallery2();
    },
  },
};
</script>

<style lang="scss" scoped>
$gold: #cc9504;

#portfolio-app {
  margin: auto;
  width: 100%;
  height: 100%;
  background: url('../../assets/websites-background.jpg') no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.css-slider-wrapper {
  display: block;
  overflow: hidden;
  position: absolute;
  left: 45px;
  right: 45px;
  top: 200px;
  bottom: 0;
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

/* Slider */
.slider {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  z-index: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  -webkit-transition: -webkit-transform 1600ms;
  transition: -webkit-transform 1600ms, transform 1600ms;
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* Slides Background Color */
.slide-1 {
  left: 0;
}
.slide-2 {
  left: 100%;
}
.slide-3 {
  left: 200%;
}
.slide-4 {
  left: 300%;
}
.slider {
  display: flex;
  justify-content: flex-start;
}
.slider-content {
  width: 635px;
  padding-left: 100px;
}

.slider img {
  position: absolute;
  right: 10%;
  bottom: 0;
  height: 100%;
  opacity: 0;
  -webkit-transform: translateX(500px);
  transform: translateX(500px);
}

.slide-1 img {
  right: 0;
}
.slider .buy-now-btn:focus,
.navigation .login-btn:focus {
  outline: none;
}

.slider-pagination {
  position: absolute;
  width: 100%;
  z-index: 1000;
  align-items: center;
  .gallery-button {
    font-family: "Cutive Mono", monospace;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 15px 60px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.8s ease-in-out;
    right: 8rem;
    position: absolute;
  }

  .gallery-button:hover {
    font-family: "Cutive Mono", monospace;
    background-color: transparent;
    border: 1px solid $gold;
    color: $gold;
  }
}
.slider-pagination label {
  font-size: 20px;
  font-weight: 100;
  font-family: "Cutive Mono", monospace;
  display: inline-block;
  margin: 0 2rem;
  color: white;
  &:hover {
    color: $gold;
  }
}

/* Slider Slide Effect */
.slide-radio1:checked ~ .slider {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
}
.slide-radio2:checked ~ .slider {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.slide-radio3:checked ~ .slider {
  -webkit-transform: translateX(-200%);
  transform: translateX(-200%);
}
.slide-radio4:checked ~ .slider {
  -webkit-transform: translateX(-300%);
  transform: translateX(-300%);
}

.slide-radio1:checked ~ .slide-1 img,
.slide-radio2:checked ~ .slide-2 img,
.slide-radio3:checked ~ .slide-3 img,
.slide-radio4:checked ~ .slide-4 img {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .slider-content {
    padding: 0 2%;
  }

  .navigation {
    padding: 0 2%;
  }

  .navigation-left {
    display: none;
  }

  .number-pagination {
    right: 2%;
  }
  .slider-pagination {
    left: 2%;
  }

  .slider .buy-now-btn {
    padding: 0 15px;
    width: 175px;
    height: 42px;
  }

  .slider .buy-now-btn:after {
    top: 15px;
  }

  .slider img {
    right: 2%;
  }

  .slide-1 img {
    right: -110px;
  }
}

.gallery {
  list-style: none;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 0 3rem;
  margin-top: 2rem;
}

.gallery li {
  margin: 2em auto;
}

.gallery img {
  max-width: 1000px;
  width: auto;
  position: initial;
}

.gallery li .item {
  position: relative;
}

.snip1295 {
  position: relative;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  &:hover {
    transform: scale(1.07);
  }
}
.snip1295 img {
  vertical-align: top;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: auto;
}
.snip1295 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
}

@media screen and (max-width: 570px) {
  .navigation-black {
    padding: 5.5em 4em 1em 1.8em;
    position: absolute;
    z-index: 5;
  }
}

@media screen and (min-width: 571px) {
  .navigation-black {
    padding: 6.5em 4em 1.8em 4.5em;
    position: absolute;
    z-index: 5;
  }
}

@media only screen and (max-height: 710px) {
  .slider-pagination {
    top: 118px;
    left: -12px;
    height: 25px;
    width: 151px;
    float: right;
    position: relative;
    z-index: 6;
    display: flex;
    label {
      float: right;
    }
    #cta-portfolio {
      display: none;
    }
  }
}

@media only screen and (min-height: 711px) {
  .slider-pagination {
    bottom: 118px;
    left: 55px;
    display: flex;
  }
}

@media screen and (max-width: 1023px) {
  .navigation {
    padding: 5.5em 4em 1em 1.8em;
  }

  .gallery {
    display: inline-block;
    position: absolute;
    padding: 0;
    top: 10rem;
  }

  .css-slider-wrapper {
    overflow: scroll;
    overflow-x: hidden;
  }

  .slider-pagination {
    top: 10px;
    left: 16px;
    height: 25px;
    width: 151px;
    position: fixed;
    z-index: 10;
    label {
      float: right;
      color: black;
    }
    #cta-portfolio {
      display: none;
    }
  }
}

.navigation {
  position: absolute;
  z-index: 5;
}

</style>
