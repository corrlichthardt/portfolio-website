<template>
  <div id="contact-app">
    <mini-menu></mini-menu>
    <social-media></social-media>
    <sound-on-off></sound-on-off>

    <div id="content-info">
      <div id="box-contact">
        <div id="square">
          <span id="left-side"></span>
          <span id="top-side"></span>
          <span id="right-side"></span>
          <span id="bottom-side"></span>

          <div class="contact-container">
            <div class="content-wrapper">
              <h1 class="contact-title">Feel free to contact me anytime:</h1>
              <a class="contact-text" href="mailto:theartofcorr@gmail.com">theartofcorr@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniMenu from '@/components/MiniMenu.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import SoundOnOff from '@/components/SoundOnOff.vue';

export default {
  name: 'contact-app',
  components: {
    miniMenu: MiniMenu,
    socialMedia: SocialMedia,
    soundOnOff: SoundOnOff,
  },
  methods: {
    drawBorder() {
      $(document).ready(() => {
        let tl;
        const bgColor = 'white';
        const easing = Power0.easeNone;

        tl = new TimelineMax({
          repeat: 0,
          yoyo: true,
        });

        // top
        tl.fromTo(
          '#top-side',
          1,
          {
            width: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing,
          },
          {
            width: 100,
            background: bgColor,
          },
        );

        // right
        tl.fromTo(
          '#right-side',
          1,
          {
            height: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing,
          },
          {
            height: 100,
            background: bgColor,
          },
        );

        // bottom
        tl.fromTo(
          '#bottom-side',
          1,
          {
            width: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing,
          },
          {
            width: 100,
            background: bgColor,
          },
        );

        // left
        tl.fromTo(
          '#left-side',
          1,
          {
            height: 0,
            background: bgColor,
            immediateRender: false,
            autoRound: false,
            ease: easing,
          },
          {
            height: 100,
            background: bgColor,
          },
        );

        TweenMax.staggerFrom(".content-wrapper", 2, {
          delay: 0.1,
          y: 50,
          opacity: 0,
          ease: Expo.easeInOut
        });
      });
    },
  },
  beforeMount() {
    this.drawBorder();
  },
};
</script>

<style lang="scss" scoped>
  #contact-app {
    overflow: hidden;
    margin: auto;
    width: 100%;
    height: 100%;
    background: url('../../assets/contact.jpg') no-repeat center bottom fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

#content-info {
  display: table;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  #box-contact {
    position: relative;
    width: 700px;
    height: 250px;
    padding: 0;
    float: right;
    #square {
      display: table-cell;
      vertical-align: middle;
      #left-side,
      #top-side,
      #right-side,
      #bottom-side {
        position: absolute;
        background: none transparent;
        width: 0px;
        height: 0px;
      }
      #left-side {
        left: 0;
        bottom: 0;
        height: 700px;
        width: 1px;
      }
      #top-side {
        top: 0;
        left: 600px;
        width: 700px;
        height: 1px;
      }
      #right-side {
        right: 0;
        top: 0;
        height: 700px;
        width: 1px;
      }
      #bottom-side {
        bottom: 0;
        right: 600px;
        width: 700px;
        height: 1px;
      }
    }
  }

  .contact-container {
    .content-wrapper {
      &:first-child {
        margin-bottom: 1.5rem;
      }
      .contact-title {
        font-family: "Cutive Mono", monospace;
        word-spacing: 5.5px;
        font-size: 16px;
        color: white;
        font-weight: 100;
      }
      .contact-text {
        font-family: "Russo One", sans-serif;
        word-spacing: 5.5px;
        color: white;
        text-decoration: underline;
        font-weight: 500;
        margin: 0.8rem 0;
        text-transform: uppercase;
      }
    }
  }
}

@media only screen and (max-width: 470px) {
  .contact-container {
    margin-left: -0.6rem;
    width: 255px;
      overflow-wrap: break-word;
      .contact-text {
        font-size: 24px;
      }
  }
}

@media only screen and (min-width: 471px) {
  .contact-container {
    margin-left: -0.6rem;
    margin-right: auto;
    width: 530px;
    .contact-text {
      font-size: 22px;
    }
  }
}

@media only screen and (min-width: 571px) {
  .contact-container {
    width: 530px;
    margin-left: 2rem;
    .contact-text {
      font-size: 26px;
    }
  }
}

@media only screen and (max-height: 600px) {
  #contact-app {
    overflow: scroll;
    overflow-x: hidden;
  }
}

@media only screen and (min-width: 801px) {
  #box-contact {
    #square {
      width: 700px;
    }
  }
}

@media only screen and (max-width: 900px) {
  #box-contact {
    margin: 0 3.8rem;
    #square {
      width: 300px;
      #left-side,
      #right-side,
      #top-side,
      #bottom-side {
        display: none;
      }
    }
  }
}

@media only screen and (min-width: 901px) {
  #box-contact {
    #square {
      height: 250px;
    }
  }
}

@media only screen and (max-width: 1950px) and (min-width: 901px) {
  #box-contact {
    margin: 3rem 5rem 0 0;
      .contact-container {
        margin-left: auto;
        margin-right: auto;
      .contact-text {
        font-size: 36px;
      }
    }
  }
}

@media only screen and (min-width: 1951px) {
  #box-contact {
    margin: 10rem 16rem 0 0;
    .contact-container {
      margin-left: auto;
      margin-right: auto;
    }
    .contact-text {
      font-size: 36px;
    }
  }
}
</style>
