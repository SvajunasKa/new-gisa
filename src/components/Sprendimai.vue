<template>
  <div class="container">
    <div class="title">
      <h1>{{data.offer_title.name}}</h1>
    </div>
    <section>
      <div class="row">
        <div class="col-md-5">

        </div>
        <div class="col-md-7">
          <div class="img">
            <div v-for="image in data.family_img">
              <img :src="image.src"/>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      document.body.className = 'offer';
    },
    destroyed: () => {
      document.body.className = '';
    }
  }

</script>

<style scoped lang="scss">
  @import '~$scss';
  .title{
    padding: 50px 0;
    h1{
      @include h1();
    }
  }
  .img{
    display: flex;
    img{
      display: inline-block;
      width: 97%;
    }
  }

</style>
