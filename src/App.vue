<template>
  <div id="app">
    <app-loading v-if="isLoading"></app-loading>
    <app-header></app-header>
    <router-view></router-view>
    <app-popup></app-popup>
  </div>
</template>

<script>
  import Header from './components/elements/Header'
  import Popup from './components/elements/Popup'
  import Loading from './components/elements/Loading'

  export default {
    name: 'app',

      components: {
          appHeader: Header,
          appPopup: Popup,
          appLoading: Loading
      }
  }
</script>

<style lang="scss">
  @import '~$scss';

</style>
