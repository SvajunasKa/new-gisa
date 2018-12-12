<template>
    <header>
        <div class="container">
              <nav>
                <router-link class="logo" to="/"><img src="../../assets/images/logo.png"/></router-link>
                <ul class="nav-menu">
                  <li>
                    <router-link class="link" to="/sprendimai"> {{getAllData.menu[0]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/apsvietimo_technika">{{getAllData.menu[1]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/igarsinimo_technika">{{getAllData.menu[2]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/atlikti_darbai">{{getAllData.menu[3]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/musu_draugai">{{getAllData.menu[4]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/" >{{getAllData.menu[5]}}</router-link>
                  </li>
                </ul>
                <div class="menu-btn"><p>Meniu</p>
                  <span></span>
                </div>
              </nav>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                menuData: []
            }
        },
        computed: {
            ...mapGetters([
                'getAllData'
            ])
        },
    }
</script>

<style scoped lang="scss">

  header {
    height: 5em;
    width: 100%;
    z-index: 9999;
    position: fixed;
  }
    .logo {
        float: left;
        img {
            width: 100px;
        }
    }
    li {
        display: inline-block;
        padding: 10px 15px;
        &:hover {
            background-color: $gray;

        }
    }
    .link {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-family: $font;
    }

    nav {
        padding: 10px 0;
        display: flex;
        align-items: center;
        .nav-menu {
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding-left: 0;
            margin: 0;
            a {
                color: $white;
            }
        }
      .menu-btn{
        position: absolute;
        right: 0;
        text-align: center;
        span {
          padding: 10px 30px;
          &:after {
            display: inline-block;
            margin-left: 10px;
            width: 20px;
            height: 10px;
            content: "";
            border-left: solid 10px transparent;
            border-top: solid 10px #fff;
            border-right: solid 10px transparent;
          }
        }
      }
    }

  @media screen and (max-width: $break-tablet){
    nav{
      position: relative;
      .nav-menu{
        //display: none;
        position: absolute;
        display: block;
        top: 3em;
        background: $gray;
        li{
          display: block;
          height: 40px;
          text-align: center;
          border-bottom: 1px solid $white;
          &:last-of-type{
            border-bottom: none;
          }
          a{
           width: 100%;
          }
        }
      }
    }
  }

</style>
