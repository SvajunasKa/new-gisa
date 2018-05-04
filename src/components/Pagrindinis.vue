<template>
  <div class="container-fluid">
    <section class="banner">
      <!--<div class="row">-->
      <!--<div class="col-md-6">-->
      <!--<div v-for="image in data.images">-->
      <!--<img :src="image.src"/>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="col-md-6">-->

      <!--<div v-for="image in data.images">-->
      <!--<img :src="image.src"/>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <div class="inner container">
        <transition name="slide-right" appear>
          <hr>
        </transition>
        <transition name="fade" appear>
          <h1 v-if="show">{{data.banner_title.name}}</h1>
        </transition>
        <transition name="slide-left" appear>
          <hr>
        </transition>
        <div class="button">
          <a href="#">{{data.button_text.name}}</a>
        </div>
        <div class="content">
          <h2>{{data.banner_text.name}}<br><br>{{data.banner_text.name1}}<br><br>{{data.banner_text.name2}}<br>{{data.banner_text.name3}}<br><br>{{data.banner_text.name4}}
          </h2>
        </div>
      </div>

    </section>
    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-4">
            <div class="img">
              <img :src="data.audio.src"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text">
              <router-link to="/igarsinimo_technika">{{data.audio.text}}</router-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-md-8">
            <div class="text">
              <router-link to="/apsvietimo_technika">{{data.light.text}}</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img">
              <img :src="data.light.src"/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-md-4">
            <div class="img">
              <img :src="data.offer.src"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text">
              <router-link to="/sprendimai">{{data.offer.text}}</router-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-md-8">
            <div class="text">
              <router-link to="/atlikti_darbai">{{data.projects.text}}</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img">
              <img :src="data.projects.src"/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-md-4">
            <div class="img">
              <img :src="data.partners.src"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text">
              <router-link to="/musu_draugai">{{data.partners.text}}</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        show: true
      }
    },
    computed: {
      ...mapGetters([
        'data'
      ])
    },
    created: () => {
      document.body.className = 'home';
    },
    destroyed: () => {
      document.body.className = '';
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
  .banner {
    height: 100vh;
  }

  .inner {
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 100%;
    h1 {
      @include h1();
      display: inline-block;
      padding: 10px 20px;
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
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
  }

  .button {
    display: inline-block;
    background-color: $red;
    border-radius: 3px;
    margin: 50px 0;
    a {
      text-decoration: none;
      color: $white;
      text-transform: uppercase;
      line-height: 2;
      padding: 0 20px;
    }
  }

  h2 {
    font-size: 16px;
    font-family: $font;
    text-align: center;
    text-transform: uppercase;
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
      border: 3px solid rgba(0, 0, 0, 0.1);
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
