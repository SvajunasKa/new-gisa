<template>
  <header>
    <div class="container">
      <nav>
        <router-link class="logo" to="/"><img src="../../assets/images/logo.png"/></router-link>
        <ul class="nav-menu">
          <li>
            <router-link class="link" to="/sprendimai">{{data.data.menu[0]}}</router-link>
          </li>
          <li>
            <router-link class="link" to="/apsvietimo_technika">{{data.data.menu[1]}}</router-link>
          </li>
          <li>
            <router-link class="link" to="/igarsinimo_technika">{{data.data.menu[2]}}</router-link>
          </li>
          <li>
            <router-link class="link" to="/atlikti_darbai">{{data.data.menu[3]}}</router-link>
          </li>
          <li>
            <router-link class="link" to="/musu_draugai">{{data.data.menu[4]}}</router-link>
          </li>
          <li>
            <router-link class="link" to="/kontaktai" >{{data.data.menu[5]}}</router-link>
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
      ]),
    },
  }
</script>

<style scoped lang="scss">
  @import '~$scss';
  header{
    background-color: $gray;
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
     // background-color: $gray;
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
      padding-left: 0;
      a{
        color: $white;
      }
    }
  }

</style>
