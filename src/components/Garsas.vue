<template>
  <div class="content">
    <div v-for="data in wpData" v-if="data.slug === 'garsas'">
      <div class="title">
        <h1 v-html="data.title.rendered"></h1>
      </div>
      <div class="container">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <div class="text-block">
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
      }
    },
    mounted(){
      this.$store.dispatch('loadData');
      window.addEventListener('load', this.getElements, false );
      this.getElements();
    },
    methods: {
      getElements() {
        let tag = document.getElementsByTagName("h2");
        let arr = [...tag];
        this.showTable(arr)
      },
      showTable(a) {
        a.forEach((e) => {
          e.addEventListener("click", () => {
            let tar = event.target;
            tar.nextElementSibling.classList.toggle("active");
          })
        })
      }
    },
    computed: mapState([
      'wpData'
    ])

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
  table{
    color: red;
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
