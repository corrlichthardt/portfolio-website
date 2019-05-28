<template>
  <div class="navigation-black">
    <div class="logo_button">
      <a href="index.html">
        <img src="@/assets/images/corrlogo.png" width="60px">
      </a>
    </div>
    <nav class="menu-black">
      <ul>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        work: 'Works',
        about: 'About',
        contact: 'Contact',
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
$gold: #cc9504;

.navigation-black {
  z-index: 15;
  position: absolute;

  .logo_button {
    margin-left: 0.7em;
  }

  .menu-black {
    font-family: "Cutive Mono", monospace;
    font-size: 15px;
  }

  .menu-black a {
    transition: all 1s ease-in-out;
  }

  .menu-black ul {
    list-style: none;
    display: flex;
    padding: 0px;
    margin: 0px;
    width: 619px;
  }

  .menu-black ul li {
    margin: 1em 1.4em;
  }

  .menu-black ul li a {
    text-decoration: none;
    color: black;
    transition: all 0.5s ease-in-out;
  }

  .menu-black ul li a:hover {
    color: $gold;
    text-decoration: line-through;
  }
}

@media screen and (min-width: 571px) {
  .navigation-black {
    padding: 6.5em 4em 1.8em 4.5em;
  }
}

@media screen and (max-width: 570px) {
  .navigation-black {
    padding: 5.5em 4em 1em 1.8em;
  }
}
</style>
