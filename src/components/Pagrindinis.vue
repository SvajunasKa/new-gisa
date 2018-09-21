<template>
  <div class="content">
    <div class="container">
    <section class="banner">
      <transition name="slide-right" appear>
        <hr>
      </transition>
      <transition name="fade" appear>
        <h1 v-if="show">{{data.data.banner_title.name}}</h1>
      </transition>
      <transition name="slide-left" appear>
        <hr>
      </transition>
      <div class="inner container">
        <div class="button" v-scroll-to="'#main'">
          <a href="#">{{data.data.button_text.name}}</a>
        </div>
        <div class="content">
          <h2 v-for="banner_text in data.data.banner_text">
            {{banner_text}}
          </h2>
          <!--<h2>{{data.data.banner_text[0]}}<br><br>{{data.data.banner_text[1]}}<br><br>{{data.data.banner_text[2]}}
            <br>{{data.data.banner_text[3]}}<br><br>{{data.data.banner_text[4]}}
          </h2>-->
        </div>
      </div>
    </section>
    <div class="container" id="main">
      <section>
        <hr>
        <div class="row">
          <div class="col-md-4">
            <div class="img">
              <img :src="data.images.audio.src"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text">
              <router-link to="/igarsinimo_technika">{{data.images.audio.text}}</router-link>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <section>
        <div class="row">
          <div class="col-md-8">
            <div class="text">
              <router-link to="/apsvietimo_technika">{{data.images.light.text}}</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img">
              <img :src="data.images.light.src"/>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <section>
        <div class="row">
          <div class="col-md-4">
            <div class="img">
              <img :src="data.images.offer.src"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text">
              <router-link to="/sprendimai">{{data.images.offer.text}}</router-link>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <section>
        <div class="row">
          <div class="col-md-8">
            <div class="text">
              <router-link to="/atlikti_darbai">{{data.images.projects.text}}</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img">
              <img :src="data.images.projects.src"/>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <section>
        <div class="row">
          <div class="col-md-4">
            <div class="img">
              <img :src="data.images.partners.src"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text">
              <router-link to="/musu_draugai">{{data.images.partners.text}}</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <app-form></app-form>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  import contactForm from '../components/elements/contactForm'

  export default {
    data() {
      return {
        show: true
      }
    },
    mounted () {
      this.$store.dispatch('loadCoins')
    },
    computed: {
      ...mapState([
        'data'
      ]),
    },
    components:{
      appForm: contactForm
    }

  }

</script>


<style lang="scss">
  @import '~$scss';

  .home {
    background-color: $gray;
    height: 100vh;
    position: relative;
    &:after {
      background-image: url("../assets/images/banner.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      content: "";
      opacity: 0.2;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: fixed;
      z-index: -1;
    }
  }
  h1 {
    @include h1();
    position: relative;
    z-index: 1;
    font-family: $font;
    @include letter-space();
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 3s;
    transition-delay: 1s;
  }
  .slide-right-enter-active {
    animation: slide-in 1s;
  }
  .slide-left-enter-active {
    animation: slide-in-left 1s;
  }
  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      width: 100%;
      transform: translateX(0);
    }
  }
  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
    }
    100% {
      width: 100%;
    }
  }
  .banner {
    height: 100vh;
    text-align: center;

  }

  .button {
    display: inline-block;
    margin: 10vh 0;
    a {
      text-decoration: none;
      color: $white;
      text-transform: uppercase;
      padding: 20px 60px;
      background-color: $red;
      border-radius: 3px;
      font-size: 18px;
    }
  }

  h2 {
    font-size: 20px;
    font-family: $font;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.3;
    @include letter-space();
  }

  img {
    width: 100%;
  }

  .text {
    text-align: center;
    a {
      @include link();
      font-size: 22px;
      font-weight: bold;
    }
  }

  .col-md-8 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    .row {
     // border: 3px solid rgba(0, 0, 0, 0.1);
      border-left: none;
      border-right: none;
      margin-top: 15px;
      margin-bottom: 15px;
      padding-top: 20px;
      padding-bottom: 20px;
      &:nth-child(odd) {
        border-top: none;
      }
    }

  }


</style>
