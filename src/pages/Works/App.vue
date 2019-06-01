<template>
  <div id="works-app">
    <mini-menu></mini-menu>
    <social-media></social-media>
    <sound-on-off></sound-on-off>

    <div id="box">
      <div id="square">
        <span id="top-side"></span>
        <span id="right-side"></span>
        <div id="works-container">
          <h1 class="design-quote">
            "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated."&nbsp;
            <span
              class="author"
            >- Paul Rand</span>
          </h1>
          <p
            class="intro-text"
          >I love creating, designing and coding. Mixing these skills together is so exciting. Being able to think creatively and develop the logic to realise ideas is what drew me to becoming a frontend developer. Photography is my main form of art. I like to layout and compose images in my mind and see my vision come to life when I take the photo. Below are the links to my photography and website portfolio:</p>
          <input
            class="gallery-button"
            type="button"
            value="View Photography >"
            onclick="window.location.href='gallery.html'"
          >
          <input
            class="gallery-button second"
            type="button"
            value="View Websites >"
            onclick="window.location.href='portfolio.html'"
          >
        </div>
      </div>
    </div>

    <div id="works-container-md">
      <h1 class="design-quote-md">
        "Design can be art. Design can be aesthetics. Design is so simple,that's why it is so complicated."&nbsp;
        <span
          class="author"
        >- Paul Rand</span>
      </h1>
      <p
        class="intro-text-md"
      >I love creating, designing and coding. Mixing these skills together is so exciting. Being able to think creatively and develop the logic to realise ideas is what drew me to becoming a frontend developer. Photography is my main form of art. I like to layout and compose images in my mind and see my vision come to life when I take the photo. Below are the links to my photography and website portfolio:</p>
      <input
        class="gallery-button-md"
        type="button"
        value="View Photography >"
        onclick="window.location.href='gallery.html'"
      >
      <input
        class="gallery-button-md second"
        type="button"
        value="View Websites >"
        onclick="window.location.href='portfolio.html'"
      >
      <p></p>
    </div>
  </div>
</template>

<script>
import MiniMenu from '@/components/MiniMenu.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import SoundOnOff from '@/components/SoundOnOff.vue';

export default {
  name: 'Works',
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

        TweenMax.staggerFrom("#works-container", 2, {
          delay: 0.1,
          x: -60,
          opacity: 0,
          ease: Expo.easeInOut
        });

        TweenMax.staggerFrom("#works-container-md", 2, {
          delay: 0.1,
          x: -60,
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
$white: #ffffff;
$gold: #cc9504;

#works-app {
  margin: auto;
  width: 100%;
  height: 100%;
  background: url("../../assets/works.jpg") no-repeat bottom fixed;
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
  right: 0;
  width: 700px;
  height: 250px;
  margin-left: 10rem;
  padding: 0;
  #square {
    display: table-cell;
    vertical-align: middle;
    height: 250px;
    width: 700px;

    #top-side,
    #right-side {
      position: absolute;
      background: none transparent;
      width: 0px;
      height: 0px;
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
    .design-quote {
      font-family: "Russo One", sans-serif;
      word-spacing: 5.5px;
      font-size: 34px;
      margin-top: 2em;
      color: $white;
      font-weight: 500;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 36px;
      margin-right: 3.5rem;
    }

    .author {
      font-size: 12px;
    }

    .intro-text {
      font-family: "Cutive Mono", monospace;
      margin: 3em 5em 5em 0em;
      color: $white;
    }

    .gallery-button {
      font-family: "Cutive Mono", monospace;
      background-color: transparent;
      border: 1px solid $white;
      color: $white;
      padding: 15px 60px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      transition: all 0.8s ease-in-out;
      margin-top: 0.5em;
      &.second {
        margin-left: 2rem;
      }
    }

    .gallery-button:hover {
      font-family: "Cutive Mono", monospace;
      background-color: transparent;
      border: 1px solid $gold;
      color: $gold;
    }
  }
}

#works-container-md {
  display: none;
  margin: auto;
  .design-quote-md {
    font-family: "Russo One", sans-serif;
    word-spacing: 5.5px;
    font-size: 20px;
    margin-top: 1em;
    color: $white;
    font-weight: 500;
  }

  .author-md {
    font-size: 12px;
  }

  .intro-text-md {
    font-family: "Cutive Mono", monospace;
    margin: 2em 0em 3em 0em;
    color: $white;
    font-size: 14px;
  }

  .gallery-button-md {
    font-family: "Cutive Mono", monospace;
    background-color: transparent;
    border: 1px solid $white;
    color: $white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.8s ease-in-out;
    margin-top: 0.5em;
    min-width: 240px;
    &.second {
      margin: 0.5em auto 45px auto;
    }
  }

  .gallery-button-md:hover {
    font-family: "Cutive Mono", monospace;
    background-color: transparent;
    border: 1px solid $gold;
    color: $gold;
  }
}

@media only screen and (max-width: 570px) {
  #box {
    display: none;
  }
  #works-container-md {
    display: block;
    padding: 0 4em 0 3em;
    .gallery-button-md, .gallery-button-md.second {
      display: flex;
      margin: 0 auto 1rem 0;
    }
  }
}

@media (max-width: 824px) and (min-width: 571px) {
  #box {
    display: none;
  }
  #works-container-md {
    display: block;
    padding: 0 4em 0 5.5em;
    .gallery-button-md, .gallery-button-md.second {
      display: flex;
      margin: 0 auto 1rem 0;
    }
  }
}

@media only screen and (max-width: 1000px) {
  #box {
    margin: 1rem 0 0 6rem;
    #square {
      #top-side,
      #right-side {
        display: none;
      }
    }
  }
}

@media only screen and (min-height: 1200px) {
  #box {
    top: 10%;
  }
}

@media only screen and (min-width: 2400px) {
  #box {
    margin-left: 16rem;
  }
}
</style>
