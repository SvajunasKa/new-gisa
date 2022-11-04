<<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/elements/Header'
  import Footer from './components/elements/Footer'


  export default {
    name: 'app',

      components: {
          appHeader: Header,
          appFooter: Footer
      }
  }
</script>

<style lang="scss">

</style>
