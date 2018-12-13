<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-popup></app-popup>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/elements/Header'
  import Popup from './components/elements/Popup'
  import Footer from './components/elements/Footer'


  export default {
    name: 'app',

      components: {
          appHeader: Header,
          appPopup: Popup,
          appFooter: Footer
      }
  }
</script>

<style lang="scss">

</style>
