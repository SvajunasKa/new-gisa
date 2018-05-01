<template>
  <header>
    <div class="container-fluid">
      <nav>
        <router-link class="logo" to="/"><img src="../../src/assets/images/logo.png"/></router-link>
        <ul class="nav-menu">
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
      </nav>
    </div>
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
  @import '~$scss';
  header{
    //background-color: $gray;
    background: transparent;
  }
  .logo {
    float: left;
    img {
      width: 100px;
    }
  }
  li {
    display: inline-block;
    &:hover{
      background-color: $gray;
    }
  }
  .link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    font-family: $font;
  }
  nav{
    padding: 10px 0;
    display: flex;
    align-items: center;
    .nav-menu{
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  }

</style>
