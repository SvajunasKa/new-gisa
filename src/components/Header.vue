<template>
  <header>
    <ul>
      <li>
        <router-link class="link" to="/sprendimai">{{data.menu[0].name}}</router-link>
      </li>
      <li>
        <router-link class="link" to="/apsvietimo_technika">{{data.menu[1].name}}</router-link>
      </li>
      <li>
        <router-link class="link" to="/igarsinimo_technika">{{data.menu[2].name}}</router-link>
      </li>
      <li>
        <router-link class="link" to="/atlikti_darbai">{{data.menu[3].name}}</router-link>
      </li>
      <li>
        <router-link class="link" to="/musu_draugai">{{data.menu[4].name}}</router-link>
      </li>
      <li>
        <router-link class="link" to="/kontaktai">{{data.menu[5].name}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        "data",
      ])

    }
  }
</script>

<style scoped lang="scss">
  //@import "../assets/style/main";
  li {
    display: inline-block;
  }
  .link {
    text-decoration: none;
    //@include xxx();
  }
</style>
