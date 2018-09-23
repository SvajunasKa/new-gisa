<template>
    <header>
        <div class="container">

              <nav>
                <router-link class="logo" to="/"><img src="../../assets/images/logo.png"/></router-link>
                <ul class="nav-menu">
                  <li>
                    <router-link class="link" to="/sprendimai"> {{headerData[0]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/apsvietimo_technika">  {{headerData[1]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/igarsinimo_technika"> {{headerData[2]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/atlikti_darbai"> {{headerData[3]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/musu_draugai"> {{headerData[4]}}</router-link>
                  </li>
                  <li>
                    <router-link class="link" to="/kontaktai" > {{headerData[5]}}</router-link>
                  </li>
                </ul>
              </nav>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        mounted() {
           // this.$store.dispatch('loadCoins')
        },
        computed: {
            headerData() {
                return this.$store.getters.getAllData.menu;
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '~$scss';

    header {
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
        &:hover {
            // background-color: $gray;
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
            a {
                color: $white;
            }
        }
    }

</style>
