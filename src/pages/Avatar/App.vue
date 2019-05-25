<template>
  <div id="avatar-app">
    <div class="overlay"></div>
    <div class="menu">
      <nav>
        <a id="earth" href="#">
          <img src="../../assets/earth.png">
        </a>
        <a id="fire" href="#">
          <img src="../../assets/fire.png">
        </a>
        <a id="air" href="#">
          <img src="../../assets/air.png">
        </a>
        <a id="water" href="#">
          <img src="../../assets/water.png">
        </a>
      </nav>
    </div>
    <div class="nation">
      to the
      <span class="element"></span> >
    </div>
  </div>
</template>

<script>
export default {
  name: 'avatar-app',
  methods: {
    overlay() {
      $(document).ready(() => {
        $('a').on('mouseover', () => {
          $('.overlay').show();
        });
        $('a').on('mouseout', () => {
          $('.overlay').hide();
        });

        $(document).ready(() => {
          $('.nation').hide();
          $('#water').on('mouseover', () => {
            $('.nation').show();
            $('.nation .element').html('water tribe');
          });
          $('#water').on('mouseout', () => {
            $('.nation').hide();
          });

          $('.nation').hide();
          $('#air').on('mouseover', () => {
            $('.nation').show();
            $('.nation .element').html('air nomads');
          });
          $('#air').on('mouseout', () => {
            $('.nation').hide();
          });

          $('.nation').hide();
          $('#fire').on('mouseover', () => {
            $('.nation').show();
            $('.nation .element').html('fire nation');
          });
          $('#fire').on('mouseout', () => {
            $('.nation').hide();
          });

          $('.nation').hide();
          $('#earth').on('mouseover', () => {
            $('.nation').show();
            $('.nation .element').html('earth kingdom');
          });
          $('#earth').on('mouseout', () => {
            $('.nation').hide();
          });
        });
      });
    },
  },
  beforeMount() {
    this.overlay();
  },
};
</script>

<style lang="scss" scoped>
#avatar-app {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Chathura", sans-serif;
  background: url('../../assets/background.jpg') no-repeat center center fixed;
  background-position: right;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border: none;
  &::before,
  &:after {
    content: none;
  }
}

.overlay {
  position: absolute;
  display: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background: url('../../assets/background.jpg') no-repeat center center fixed;
  background-position: right;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-animation: blur 0.5s linear;
  -moz-animation: blur 0.5s linear forwards;
  -ms-animation: blur 0.5s linear forwards;
  -o-animation: blur 0.5s linear forwards;
  animation: blur 0.5s linear forwards;
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

@-webkit-keyframes blur {
  to {
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
}

@-moz-keyframes blur {
  to {
    -moz-filter: blur(5px);
    filter: blur(5px);
  }
}

@-o-keyframes blur {
  to {
    -moz-filter: blur(5px);
    filter: blur(5px);
  }
}

@keyframes blur {
  to {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    filter: blur(5px);
  }
}
.nation {
  position: fixed;
  bottom: 1em;
  right: 2em;
  color: #fff;
  font-size: 2em;
}

nav {
  display: block;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 38%;
  margin-top: -38px;
}

nav a {
  position: relative;
  display: inline-block;
  font-size: 3em;
  text-decoration: none;
  color: #fff;
  width: 4em;
  height: 4em;
  border-radius: 100%;
  overflow: hidden;
  transition: opacity 1s;
  opacity: 1;
  margin: 0.8em;
  transition: all 1s ease-in-out;
}

nav a img {
  width: 50%;
  position: absolute;
  top: 37%;
  left: 50%;
  margin-top: -25px;
  margin-left: -50px;
}

nav:hover a {
  opacity: 0.25;
}

nav:hover a:hover {
  opacity: 1;
}

#fire:hover {
  background: rgba(102, 15, 31, 0.7);
}

#water:hover {
  background: rgba(26, 47, 83, 0.7);
}

#air:hover {
  background: rgba(172, 181, 196, 0.7);
}

#earth:hover {
  background: rgba(91, 102, 74, 0.7);
}

@media screen and (max-width: 540px) and (min-width: 0px) {
  body nav {
    top: 0%;
    margin-top: 0px;
  }
}

@media screen and (max-width: 1084px) and (min-width: 540px) {
  body nav {
    top: 18%;
    margin-top: -18px;
  }
}
</style>
