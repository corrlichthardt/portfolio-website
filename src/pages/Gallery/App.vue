<template>
  <div id="gallery-app">
    <mini-menu></mini-menu>
    <social-media></social-media>
    <sound-on-off></sound-on-off>
    <!-- Slider Wrapper -->
    <div class="css-slider-wrapper">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <gallery id="blueimp-gallery2" :images="images2" :index="index2" @close="index2 = null"></gallery>
      <gallery id="blueimp-gallery3" :images="images3" :index="index3" @close="index3 = null"></gallery>
      <gallery id="blueimp-gallery4" :images="images4" :index="index4" @close="index4 = null"></gallery>
      <gallery id="blueimp-gallery5" :images="images5" :index="index5" @close="index5 = null"></gallery>
      <gallery id="blueimp-gallery6" :images="images6" :index="index6" @close="index6 = null"></gallery>
      <gallery id="blueimp-gallery7" :images="images7" :index="index7" @close="index7 = null"></gallery>
      <gallery id="blueimp-gallery8" :images="images8" :index="index8" @close="index8 = null"></gallery>
      <gallery id="blueimp-gallery9" :images="images9" :index="index9" @close="index9 = null"></gallery>

      <input type="radio" name="slider" class="slide-radio1" checked id="slider_1">
      <input type="radio" name="slider" class="slide-radio2" id="slider_2">
      <input type="radio" name="slider" class="slide-radio3" id="slider_3">

      <!-- Slider Pagination -->
      <div class="slider-pagination">
        <label for="slider_1" class="page1">☾</label>
        <label for="slider_2" class="page2">⚘</label>
        <input
          id="cta-portfolio"
          class="gallery-button second"
          type="button"
          value="View Websites >"
          onclick="window.location.href='portfolio.html'"
        >
      </div>

      <!-- Slider #1 -->
      <div class="slider slide-1">
        <ul class="gallery">
          <li class="image"
              @click="index = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/7.jpg" alt="sample68">
              <a href="#"></a>
            </figure>
          </li>
          <li class="image"
              @click="index2 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/b1.jpg" alt="sample68">

              <a href="#"></a>
            </figure>
          </li>
          <li class="image"
              @click="index3 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/d1.jpg" alt="sample68">
              <a href="#"></a>
            </figure>
          </li>
          <li class="image"
              @click="index4 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/1.jpg" alt="sample68">
              <a href="#"></a>
            </figure>
          </li>
        </ul>
      </div>

      <!-- Slider #2 -->
      <div class="slider slide-2">
        <ul class="gallery">
          <li class="image"
              @click="index5 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/neon_2.jpg" alt="sample68">
              <a href="#"></a>
            </figure>
          </li>
          <li class="image"
              @click="index6 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/s4.jpg" alt="sample68">
              <a href="#"></a>
            </figure>
          </li>
          <li class="image"
              @click="index7 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/w2.jpg" alt="sample68">
              <a href="#"></a>
            </figure>
          </li>
          <li class="image"
              @click="index8 = image">
            <figure class="snip1295">
              <img src="@/assets/gallery/t1.jpg" alt="sample68">
              <a href="#"></a>
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
import VueGallery from 'vue-gallery';

export default {
  name: 'gallery-app',
  data() {
    return {
      images: [
        require('@/assets/gallery/7.jpg'),
        require('@/assets/gallery/5.jpg'),
        require('@/assets/gallery/6.jpg'),
        require('@/assets/gallery/8.jpg'),
        require('@/assets/gallery/9.jpg'),

      ],
      images2: [
        require('@/assets/gallery/b1.jpg'),
        require('@/assets/gallery/b2.jpg'),
        require('@/assets/gallery/b3.jpg'),
        require('@/assets/gallery/b4.jpg'),
        require('@/assets/gallery/b5.jpg'),
        require('@/assets/gallery/b6.jpg'),
        require('@/assets/gallery/b7.jpg'),
      ],
      images3: [
        require('@/assets/gallery/d1.jpg'),
        require('@/assets/gallery/d2.jpg'),
        require('@/assets/gallery/d3.jpg'),
        require('@/assets/gallery/d4.jpg'),
        require('@/assets/gallery/d5.jpg'),
        require('@/assets/gallery/d6.jpg'),
      ],
      images4: [
        require('@/assets/gallery/1.jpg'),
        require('@/assets/gallery/2.jpg'),
        require('@/assets/gallery/3.jpg'),
        require('@/assets/gallery/4.jpg'),
      ],
      images5: [
        require('@/assets/gallery/neon_2.jpg'),
        require('@/assets/gallery/neon_1.jpg'),
        require('@/assets/gallery/neon_3.jpg'),
        require('@/assets/gallery/neon_4.jpg'),
        require('@/assets/gallery/neon_5.jpg'),
        require('@/assets/gallery/neon_6.jpg'),
        require('@/assets/gallery/neon_7.jpg'),
      ],
      images6: [
        require('@/assets/gallery/s4.jpg'),
        require('@/assets/gallery/s3.jpg'),
        require('@/assets/gallery/s1.jpg'),
        require('@/assets/gallery/s2.jpg'),
        require('@/assets/gallery/s5.jpg'),
        require('@/assets/gallery/s6.jpg'),
        require('@/assets/gallery/s7.jpg'),
        require('@/assets/gallery/s8.jpg'),
      ],
      images7: [
        require('@/assets/gallery/w2.jpg'),
        require('@/assets/gallery/w1.jpg'),
        require('@/assets/gallery/w3.jpg'),
        require('@/assets/gallery/w4.jpg'),
        require('@/assets/gallery/w5.jpg'),
        require('@/assets/gallery/w6.jpg'),
      ],
      images8: [
        require('@/assets/gallery/t1.jpg'),
        require('@/assets/gallery/t2.jpg'),
        require('@/assets/gallery/t3.jpg'),
        require('@/assets/gallery/t4.jpg'),
        require('@/assets/gallery/t5.jpg'),
        require('@/assets/gallery/t6.jpg'),
        require('@/assets/gallery/t7.jpg'),
      ],
      images9: [
        require('@/assets/gallery/j1.jpg'),
        require('@/assets/gallery/j2.jpg'),
        require('@/assets/gallery/j3.jpg'),
        require('@/assets/gallery/j4.jpg'),
        require('@/assets/gallery/j5.jpg'),
        require('@/assets/gallery/j6.jpg'),
        require('@/assets/gallery/j7.jpg'),
      ],
      image: 0,
      index: null,
      index2: null,
      index3: null,
      index4: null,
      index5: null,
      index6: null,
      index7: null,
      index8: null,
      index9: null,
    };
  },
  components: {
    miniMenu: MiniMenu,
    socialMedia: SocialMedia,
    soundOnOff: SoundOnOff,
    gallery: VueGallery,
  },
  methods: {
    sliderGallery() {
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
      this.sliderGallery();
    },
  },
};
</script>

<style lang="scss" scoped>
$gold: #cc9504;

.blueimp-gallery {
  background: rgba(0,0,0,.95);
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 5px;
}

#gallery-app {
  margin: auto;
  width: 100%;
  height: 100%;
  background: url('../../assets/photography-background.jpg') no-repeat center bottom fixed;
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
  align-items: baseline;
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
  margin-top: 65px;
  padding: 0 3rem;
}

.gallery li {
  margin: 0em;
}

.gallery img {
  width: 95%;
  height: auto;
  position: initial;
}

.gallery li .item {
  position: relative;
}

.gallery li .item span {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 30%;
  padding: 0.7em 0 1.2em 0;
  color: #808080;
}

.snip1295 {
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
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
  .navigation {
    padding: 5.5em 4em 1.8em 0;
    position: absolute;
    z-index: 5;
  }
}

@media screen and (min-width: 571px) {
  .navigation {
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
    top: 118px;
    left: -12px;
    height: 25px;
    width: 151px;
    float: right;
    position: relative;
    z-index: 6;
    label {
      float: right;
    }
    #cta-portfolio {
      display: none;
    }
  }

  .navigation {
    position: absolute;
    z-index: 5;
  }
}
</style>
