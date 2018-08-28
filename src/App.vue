<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-popup>

        <h1>dadadddd</h1>

    </app-popup>

  </div>
</template>

<script>
  import Header from './components/elements/Header'
  import Popup from './components/elements/Popup'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appPopup: Popup
    }
  }
</script>

<style lang="scss">
  @import '~$scss';

</style>
