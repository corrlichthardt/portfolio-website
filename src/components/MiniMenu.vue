<template>
  <div class="navigation">
    <div class="logo_button">
      <a href="index.html">
        <img src="@/assets/corrlogo_white.png" width="60px">
      </a>
    </div>
    <nav class="menu">
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

<style lang="scss" scoped>
$gold: #cc9504;

.navigation {
  .logo_button {
    margin-left: 0.7em;
  }

  .menu {
    font-family: "Cutive Mono", monospace;
    font-size: 15px;
  }

  .menu a {
    transition: all 1s ease-in-out;
  }

  .menu ul {
    list-style: none;
    display: flex;
    padding: 0px;
    margin: 0px;
    width: 619px;
  }

  .menu ul li {
    margin: 1em 1.4em;
  }

  .menu ul li a {
    text-decoration: none;
    color: white;
    transition: all 0.5s ease-in-out;
  }

  .menu ul li a:hover {
    color: $gold;
    text-decoration: line-through;
  }
}

@media screen and (min-width: 571px) {
  .navigation {
    padding: 6.5em 4em 1.8em 4.5em;
  }
}

@media screen and (max-width: 570px) {
  .navigation {
    padding: 5.5em 4em 1.8em 0;
  }
}
</style>
