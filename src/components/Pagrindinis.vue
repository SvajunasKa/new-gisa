<template>
  <section class="banner container-fluid ">
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
    <div class="inner">
      <transition name="slide-right" appear>
        <hr>
      </transition>
      <transition name="fade" appear>
        <h1 v-if="show">{{data.banner_title.name}}</h1>
      </transition>
      <transition name="slide-left" appear>
        <hr>
      </transition>
    </div>
    <div class="content">
      <h2>{{data.banner_text.name}}</h2>
    </div>
  </section>

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
        'data',
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
   //background-image: url("../assets/images/banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .inner {
    text-align: center;
    width: 60%;
    margin: 0 auto;
    h1 {
      font-size: 28px;
      text-transform: uppercase;
      display: inline-block;
      padding: 10px 20px;
      position: relative;
      z-index: 1;
      font-family: $font;
    }
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      transition: opacity 3s ;
      transition-delay: 1s;
    }
    .slide-right-enter-active {
      animation: slide-in 1s ;
    }
    .slide-left-enter-active{
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
  h2{
    font-size: 16px;
    font-family: $font;
  }

</style>
