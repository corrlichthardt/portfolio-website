<template>
  <div id="about-app">
    <mini-menu></mini-menu>
    <social-media></social-media>
    <sound-on-off></sound-on-off>

    <div class="about-container">
      <h1 class="name-title">Corrina Lichthardt</h1>
      <div class="about-text">
        <div class="about-wrapper">
          <p>
            Hi, I’m a 26 year old web developer / designer, born and raised in New Zealand.
            After completing my Business Degree at the Auckland University of Technology (AUT),
            I moved to Germany and started an apprenticeship in IT. I love IT, in particular web-development and after coding my
            first website to promote my photography, I just didn't want to stop.
          </p>
          <p>
            I’m a self-taught designer and find the skills I've learnt also complement frontend web development.
            After 2 years I completed my apprenticeship and am now working as a full-time frontend developer at mediawave.
            My ultimate goal is to possess frontend skills that create websites, which not only convey information in a beautiful way
            but also provide an unforgettable experience.
          </p>
        </div>
      </div>

      <div id="box">
        <div id="square">
          <span class="right-side"></span>
        </div>
      </div>
    </div>

    <p>&nbsp;</p>
  </div>
</template>

<script>
import MiniMenu from '@/components/MiniMenu.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import SoundOnOff from '@/components/SoundOnOff.vue';

export default {
  name: 'about-app',
  components: {
    miniMenu: MiniMenu,
    socialMedia: SocialMedia,
    soundOnOff: SoundOnOff,
  },
  methods: {
    drawLine() {
      $(document).ready(() => {
        let tl;
        const bgColor = 'white';
        const easing = Power0.easeNone;

        tl = new TimelineMax({
          repeat: 0,
          yoyo: true,
        });

        // right
        tl.fromTo(
          '.right-side',
          1,
          {
            height: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing,
          },
          {
            height: 130,
            background: bgColor,
          },
        );

        TweenMax.staggerFrom(".name-title", 2, {
          delay: 0.1,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
        }, 0.1);

        TweenMax.from(".about-wrapper", 2, {
          delay: 0.1,
          x: -100,
          opacity: 0,
          ease: Expo.easeInOut
        });
      });
    },
  },
  beforeMount() {
    this.drawLine();
  },
};
</script>

<style lang="scss" scoped>
#about-app {
  margin: auto;
  width: 100%;
  height: 100%;
  background: url('../../assets/about.jpg') no-repeat right fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#box {
  padding-left: 12em;
  display: table;
  position: relative;
  top: 0;
  left: 0;
  width: 700px;
  height: 250px;
  margin-top: 4rem;
  padding: 0;
  #square {
    vertical-align: middle;
    height: 250px;
    width: 700px;

    #top-side,
    .right-side {
      position: absolute;
      background: none transparent;
      width: 0px;
      height: 0px;
    }

    .right-side {
      right: 0;
      top: 0;
      height: 700px;
      width: 1px;
    }
  }
}

.name-title {
  font-family: "Russo One", sans-serif;
  color: white;
  font-size: 5.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-left: 3rem;
}
.about-text {
  font-family: "Cutive Mono", monospace;
  color: white;
  width: 900px;
  .about-wrapper {
    padding-top: 0.5rem;
    pre {
      margin: auto;
      width: 386px;
      padding-top: 4rem;
    }
  }
}


@media only screen and (max-width: 1218px) {
  #box {
    display: none;
  }
}

@media only screen and (max-width: 570px) {
  .about-text {
    padding: 0 3rem;
  }
}

@media (max-width: 824px) and (min-width: 571px) {
  .name-title {
    margin-left: 6rem;
    font-size: 4rem;
  }
  .about-text {
    padding: 0 6rem;
  }
}

@media (max-width: 1190px) and (min-width: 825px) {
  .about-text {
    padding: 0 6rem;
  }
}

@media only screen and (max-width: 680px) {
  .name-title {
    font-size: 3rem;
  }
  .about-text {
    margin: 0 auto 45px auto;
  }
}

@media only screen and (max-width: 490px) {
  .name-title {
    font-size: 1.8rem;
  }
}

@media only screen and (max-width: 1024px) {
  #about-app {
    overflow: scroll;
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 1190px) {
  .about-text {
    display: table-cell;
  }
}

@media only screen and (min-width: 1191px) {
  .about-text {
      margin: 0 12rem;
  }
}

@media only screen and (min-width: 2400px) {
  .about-container {
    margin-left: 5rem;
  }
}

@media only screen and (max-height: 850px) {
  .name-title {
    margin-top: 1rem;
  }
  #square {
    display: none;
  }
}

@media only screen and (min-height: 851px) {
  #square {
    display: table-cell;
  }
}

@media only screen and (min-height: 1200px) {
  .about-container {
    display: table;
    position: relative;
    top: 6%;
    .name-title {
      font-size: 7rem;
    }
  }
}

@media only screen and (max-height: 1366px) {
  .about-container {
    display: block;
  }
}
</style>
