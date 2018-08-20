<template>
  <div class="container">
    <div class="title">
      <h1>{{data.data.sprendimai_page.offer_title.name}}</h1>
    </div>
    <section>
      <div class="row">
        <div class="col-md-5">
          <div class="content">
            <h4>{{data.data.sprendimai_page.family_title.name}}</h4>
            <p>{{data.data.sprendimai_page.family_title.description}}</p>
          </div>
          <div class="link">

            <button
              type="button"
              class="btn"
              v-on:click="show"
            >
              {{data.data.sprendimai_page.family_title.button_text}}
            </button>

          </div>
        </div>
        <div class="col-md-7">
          <div class="img">
            <div v-for="image in data.images.family_img">
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
  import {mapMutations} from 'vuex'

  export default {

    computed: {
      ...mapGetters([
        'data'
      ]),

    },
    methods:{
      // ...mapMutations([
      //   'showModal'
      // ])
      show () {
        this.$modal.show('hello-world', {foo: 'ladasdas'});
      },
      hide () {
        this.$modal.hide('hello-world');
      }
    },

    // methods:{
    //   showModal(){
    //     this.isModalVisible = true;
    //     console.log("aaa");
    //   }
    // }

  }

</script>

<style scoped lang="scss">
  @import '~$scss';

  .title {
    padding: 50px 0;
    h1 {
      @include h1();
    }
  }

  .img {
    display: flex;
    img {
      display: inline-block;
      width: 97%;
    }
  }

  h4 {
    font-size: 16px;
    text-transform: uppercase;
  }
  p{
    font-size: 16px;
    letter-spacing: 2px;
  }
  .content{


  }

</style>
