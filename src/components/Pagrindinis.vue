<template>
  <div class="row">
    <div class="col-md-6">
      <p>Home</p>
      <div v-for="image in data.images">
        <img :src="image.src"/>
      </div>
    </div>
    <div class="col-md-6">
      <p>Home</p>
      <div v-for="image in data.images">
        <img :src="image.src"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'data'
      ])
    }
  }

</script>


<style scoped>

</style>
