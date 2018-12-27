<template>
  <div class="content">
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="container">
      <section v-for="(garsas, index) in description">
        <div class="row" v-if="index%2 === 0">
          <div class="col-md-4">
            <div class="img-box">
              <img v-lazy="garsas.img" @click="showModal(garsas)">
            </div>

          </div>
          <div class="col-md-8">
            <div class="text-block">
              <p v-html="garsas.description"></p>
              <p v-html="garsas.kiekis"></p>
              <div class="text" v-if="garsas.more">
                <a @click="showModal(garsas.info)" v-html="garsas.more"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-md-8">
            <div class="text-block">
              <p v-html="garsas.description"></p>
              <p v-html="garsas.kiekis"></p>
              <div class="text" v-if="garsas.more">
                <a @click="showModal(garsas.info)" v-html="garsas.more"></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img-box">
              <img v-lazy="garsas.img" @click="showModal(garsas)">
            </div>

          </div>
        </div>
        <hr>
      </section>
    </div>
    <modal v-if="isModalVisible" @close="closeModal" :garsas="parametrai"></modal>
  </div>

</template>

<script>
  import modal from './elements/Popup-new'

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
    props: ["garsas"],
    mounted() {
      let data = this.$store.getters.getAllData;
      this.title = data.garsas_page.garsas_title.name;
      this.description = data.garsas_page.garsas;
    },
    methods: {
      showModal(parametrai) {
        this.isModalVisible = true;
        this.parametrai = parametrai;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    components: {
      modal: modal
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

  section {
    //height: 250px;
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
    height: 300px;
    flex-flow: column;
    justify-content: center;
  }

</style>
