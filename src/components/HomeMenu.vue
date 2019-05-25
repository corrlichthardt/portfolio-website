<template>
  <div id="home-menu">
    <header class="header">
      <button id="nav-toggle" class="fab fab-primary nav-toggle">
        <img class="logo_white" src="@/assets/logo_svg.svg">
        <img class="logo_black" src="@/assets/logo_black_svg.svg">
      </button>
      <div class="logo">
        <h2 class="name">{{ name }}</h2>
        <span class="description">
          <span>{{ webDev }}</span> +
          <span>{{ digiDesign }}</span>
        </span>
      </div>
    </header>
    <nav class="nav" id="nav">
      <ul class="nav-list">
        <li>
          <a href="works.html">{{ menu.work }}</a>
        </li>
        <li>
          <a href="about.html">{{ menu.about }}</a>
        </li>
        <li>
          <a href="contact.html">{{ menu.contact }}</a>
        </li>
      </ul>
    </nav>
    <div class="nav-circle" id="nav-circle"></div>
    <div class="ripple inner-ripple" id="inner-ripple"></div>
    <div class="ripple outer-ripple" id="outer-ripple"></div>
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
        work: 'Works',
        about: 'About',
        contact: 'Contact',
      },
    };
  },
  methods: {
    openNav() {
      $(document).ready(() => {
        const $nav_toggle = $('#nav-toggle');
        const $nav_circle = $('#nav-circle');
        const $nav = $('#nav');
        const $nav_list_items = $nav.find('li');
        const $ripples = $('.ripple');

        TweenMax.set($nav_list_items, {
          transformOrigin: 'center center',
        });

        $nav_toggle.click(function () {
          if ($(this).hasClass('open')) {
            // close
            $('.logo_black').css('display', 'none');
            $('.logo_white').css('display', 'block');

            TweenMax.to($nav_circle, 1, {
              width: '10px',
              height: '10px',
              ease: Power4.easeOut,
            });
            TweenMax.set($nav, {
              pointerEvents: 'none',
            });
            TweenMax.to($nav_list_items, 0.5, {
              opacity: '0',
            });
            TweenMax.set($nav_list_items, {
              x: '-100px',
              delay: 0.5,
            });
          } else {
            // open
            $('.logo_black').css('display', 'block');
            $('.logo_white').css('display', 'none');

            TweenMax.to($nav_circle, 1, {
              width: '400vw',
              height: '400vw',
              ease: Power4.easeOut,
            });
            TweenMax.set($nav, {
              pointerEvents: 'auto',
            });
            TweenMax.staggerTo(
              $nav_list_items,
              0.5,
              {
                opacity: '100',
                x: 0,
                ease: Power4.easeOut,
              },
              0.15,
            );
            TweenMax.to($ripples, 0.5, {
              opacity: '0',
            });
          }
          $(this).toggleClass('open');
        });
      });
    },
  },
  beforeMount() {
    this.openNav();
  },
};
</script>

<style lang="scss">
$black: #000000;
$gold: #e2b544;

#home-menu {
  .header {
    height: 100vh;
    position: relative;
    .logo {
      font-family: "Cutive Mono", monospace;
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      position: absolute;
      top: 66%;
      text-align: center;
      z-index: 1;
      color: white;
    }

    .logoimg {
      margin: 2em;
      height: 250px;
    }

    .name {
      font-family: "Cutive Mono", monospace;
      margin-bottom: 1rem;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 10px;
      padding: 0 1rem;
    }

    .description span {
      color: white;
      text-decoration: none;
    }
  }

  .nav {
    font-family: "Cutive Mono", monospace;
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 8;
    pointer-events: none;
    width: 25em;
    text-align: center;
  }

  .nav-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    line-height: 3.5em;
    li {
      opacity: 0;
      transform: translateX(-100px);
    }
  }

  .nav-circle {
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: darken($black, 25%);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    z-index: 5;
  }

  .nav a {
    color: white;
    font-size: 1.6em;
    font-weight: 100;
    box-sizing: border-box;
    position: relative;
    border: none;
    text-decoration: none;
    transition: all 1s ease-out;
    &:after {
      left: 50%;
      bottom: 0%;
      transform: translateX(-50%);
      content: "";
      display: block;
      height: 2px;
      background-color: white;
      position: absolute;
      width: 0;
      transition: all 0.15s ease-out;
    }
    &:hover {
      border: none;
      text-decoration: line-through;
      color: $gold;
    }
  }

  .fab {
    z-index: 10;
    border-radius: 50%;
    outline: 0;
    border: 0;
    padding: 1em;
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 2px 5px rgba(black, 0.5), 0 0 2px rgba(black, 0.25);
    transition: all 0.15s ease-out;
    &:hover {
      box-shadow: 0 4px 8px rgba(black, 0.65);
    }
    &:active {
      transform: translateX(-50%) translateY(-50%) scale(0.9);
      box-shadow: 0 1px 2px rgba(black, 0.35);
    }
    &:focus {
      outline: none;
    }
  }

  .fab.fab-primary {
    background-color: $black;
    color: $black;
    display: inline-grid;
    &:hover {
      color: darken($black, 20%);
    }
    &:active {
      background-color: darken($black, 10%);
    }
  }

  .logo_black {
    display: none;
    margin: 0.3rem;
  }

  #nav-toggle {
    display: block;
  }

  .nav-toggle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    transition: all 0.25s ease-out;
    background-color: $black;
    color: $black;
    width: 12rem;
    height: 12rem;
    padding: inherit;
    &:hover {
      cursor: pointer;
    }
    img {
      transition: all 0.25s ease-out;
    }
    &.open {
      background-color: white;
      top: 65%;
      transform: translateY(100%) translateX(-50%);
      width: 5rem;
      height: 5rem;
      &:active {
        transform: translateX(-50%) translateY(100%) scale(0.9);
        background-color: $black;
      }
    }
  }

  .ripple {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(1);
    border-radius: 50%;
    z-index: 4;
    animation: pulse 4s infinite;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .inner-ripple {
    background-color: rgba($black, 0.25);
    width: 200px;
    height: 200px;
    animation-delay: 0.35s;
  }

  .outer-ripple {
    background-color: rgba($black, 0.15);
    width: 350px;
    height: 350px;
    animation-delay: 0.75s;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(1) translateX(-50%) translateY(-50%);
    }
    30% {
      opacity: 0.5;
    }
    100% {
      transform: scale(1.5) translateX(-33.3%) translateY(-33.3%);
      opacity: 0;
    }
  }
  
  @media only screen and (max-height: 500px) {
    .nav-toggle.open {
      top: 35%;
    }
    .nav {
      top: 34%;
    }
  }

  @media only screen and (max-width: 515px) {
    .outer-ripple {
      display: none;
    }
  }
  @media screen and (max-height: 600px) {
    .logo {
      margin-top: 2rem;
      .name {
        font-size: 18px;
        margin-bottom: 5px;
      }
      .description {
        display: none;
      }
    }
  }

  @media screen and (min-height: 601px) {
    .name {
        font-size: 28px;
      }
    }
  }
</style>
