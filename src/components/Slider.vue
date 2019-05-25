<template>
  <div id="home-slider">
    <div id="dots">
      <ul>
        <li>
          <a href="#slide-1">&#8226;</a>
        </li>
        <li>
          <a href="#slide-2">&#8226;</a>
        </li>
        <li>
          <a href="#slide-3">&#8226;</a>
        </li>
        <li>
          <a href="#slide-4">&#8226;</a>
        </li>
      </ul>
    </div>

    <div class="slides-container">
      <div class="slide" id="slide-1" data-slide="1"></div>
      <div class="slide" id="slide-2" data-slide="2"></div>
      <div class="slide" id="slide-3" data-slide="3"></div>
      <div class="slide" id="slide-4" data-slide="4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Corrina Lichthardt',
      webDev: 'Web Developer',
      digiDesign: 'Digital Designer',
      menu: {
        design: 'Digital Design',
        dev: 'Web Development',
        about: 'About',
        contact: 'Contact',
      },
    };
  },
  methods: {
    slider() {
      const $window = $(window);
      const $document = $(document);
      const $navButtons = $('#dots a').filter('[href^=#]');
      const $slidesContainer = $('.slides-container');
      const $slides = $('.slide');
      let $currentSlide = $slides.first();
      let isAnimating = false;
      let pageHeight = $window.innerHeight();
      const keyCodes = {
        UP: 38,
        DOWN: 40,
      };
      const circles = $('.circle');
      const animations = circles.map(createAnimation);

      function playAnimation(target) {
        animations.each((i, animate) => {
          animate(target);
        });
      }

      function createAnimation(i, element) {
        const tween = TweenLite.to(element, 2, {
          x: 400,
          paused: true,
        });

        return function (target) {
          if (element !== target) {
            tween.pause(0);
          } else {
            tween.play(0);
          }
        };
      }

      goToSlide($currentSlide);

      $window.on('resize', onResize).resize();
      $window.on('mousewheel DOMMouseScroll', onMouseWheel);
      $document.on('keydown', onKeyDown);
      $navButtons.on('click', onNavButtonClick);

      function onNavButtonClick(event) {
        const $button = $(this);
        const $slide = $($button.attr('href'));
        if ($slide.length) {
          goToSlide($slide);
          event.preventDefault();
        }
      }

      function onKeyDown(event) {
        const PRESSED_KEY = event.keyCode;

        if (PRESSED_KEY == keyCodes.UP) {
          goToPrevSlide();
          event.preventDefault();
        } else if (PRESSED_KEY == keyCodes.DOWN) {
          goToNextSlide();
          event.preventDefault();
        }
      }

      function onMouseWheel(event) {
        const delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

        if (delta < -1) {
          goToNextSlide();
        } else if (delta > 1) {
          goToPrevSlide();
        }
      }

      function goToPrevSlide() {
        if ($currentSlide.prev().length) {
          goToSlide($currentSlide.prev());
        }
      }

      function goToNextSlide() {
        if ($currentSlide.next().length) {
          goToSlide($currentSlide.next());
        }
      }

      function goToSlide($slide) {
        if (!isAnimating && $slide.length) {
          isAnimating = true;
          $currentSlide = $slide;

          const circle = circles.get($currentSlide.index());

          TweenLite.to($slidesContainer, 1, {
            scrollTo: { y: pageHeight * $currentSlide.index() },
            onComplete: onSlideChangeEnd,
            onCompleteScope: this,
            onCompleteParams: [circle],
          });

          TweenLite.to($navButtons.filter('.active'), 0.5, {
            className: '-=active',
          });

          TweenLite.to(
            $navButtons.filter(`[href=#${$currentSlide.attr('id')}]`),
            0.5,
            { className: '+=active' },
          );
        }
      }

      function onSlideChangeEnd(target) {
        playAnimation(target);

        isAnimating = false;
      }

      function onResize(event) {
        const newPageHeight = $window.innerHeight();

        if (pageHeight !== newPageHeight) {
          pageHeight = newPageHeight;

          TweenLite.set([$slidesContainer, $slides], {
            height: `${pageHeight}px`,
          });

          TweenLite.set($slidesContainer, {
            scrollTo: { y: pageHeight * $currentSlide.index() },
          });
        }
      }
    },
  },
  mounted() {
    this.slider();
  },
};
</script>

<style lang="scss">
#back-to-tutorial {
  margin-left: 100px;
}

#dots {
  position: fixed;
  top: 0;
  z-index: 2;
  top: 50%;
  left: 5rem;
  transform: translateX(-50%) translateY(-50%);
}

#dots ul {
  list-style: none;
  text-align: center;
  margin-top: 30px;
}

#dots ul li {
  margin-right: 20px;
}

#back-to-tutorial {
  margin-left: 100px;
}

#dots a {
  position: relative;
  text-decoration: none;
  top: 0;
  font-weight: 100;
  font-size: 25px;
  text-align: center;
  border-radius: 4px;
  color: darkgrey;
  line-height: 22px;
}

#dots a.active {
  color: white;
}

.slides-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -5;
}

.slide {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
}

.slide .centered {
  width: 60%;
  margin: 200px auto 0;
}

.slide .centered h1 {
  text-align: center;
}

.slide .centered p {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
}

#slide-1 {
  background-image: url("../assets/slider-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

#slide-2 {
  background-image: url("../assets/slider-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

#slide-3 {
  background-image: url("../assets/slider-3.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

#slide-4 {
  background-image: url("../assets/slider-4.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

.go-prev,
.go-next {
  font-weight: bold;
  text-decoration: underline;
}

.circle {
  width: 75px;
  height: 75px;
  background: #dfdfdf;
  margin-top: 25px;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 500px) {
  #dots {
    display: none;
  }
}
</style>
