<template>
  <div class="content">
    <div v-for="data in $store.state.wpData" v-if="data.slug === 'garsas'">
      <div class="title">
        <h1 v-html="data.title.rendered"></h1>
      </div>
      <div class="container">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <div class="text-block" v-for="data in $store.state.wpData">
                <!--<div class="loading" v-if="loading">-->
                <!--<img src="/src/assets/images/ajax-loader.gif">-->
                <!--</div>-->
                <div class="sound" v-html="data.content.rendered"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "garsas",
    data() {
      return {
        title: null,
        description: null,
        isModalVisible: false,
        parametrai: "",
        loading: true,
        //tag: [],
      }
    },
    props: ["garsas"],
    mounted() {
      this.$store.dispatch('loadData');
      this.loading = false
    },
    methods: {
      addClick() {
        let tag = document.getElementsByTagName('h2');
        let elem = [...tag];
        this.showTable(elem)
      },

      showTable(item){
        item.forEach((e) => {
          e.addEventListener('click', () => {
            let target = event.target;
            target.nextElementSibling.classList.toggle("active");
          })
        })
      }
    },
    updated() {
      this.addClick();
    },

    computed: {
      ...mapState([
        'wpData'
      ]),
    }

  }
</script>

<style lang="scss" scoped>
  .title {
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../assets/images/audio1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @include title();
  }

  .img-box {
    width: 200px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      cursor: pointer;
    }
  }

  .text-block {
    text-align: center;
    display: flex;
    align-items: center;
    //height: 170px;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
  }

  .button-link {
    width: 250px;
    height: 50px;
    line-height: 50px;
    display: block;
  }

  @media screen and (max-width: $break-mobile) {
    .flex {
      display: flex;
      .col-md-4 {
        order: 1;
      }
      .col-md-8 {
        order: 2;
      }
    }
    .img-box {
      width: 100%;
      height: auto;
    }
  }

</style>
