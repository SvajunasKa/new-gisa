<template>
  <div class="content">
    <div class="title">
      <h1 v-html="title"></h1>
    </div>
    <div class="container">
      <section class="lights">
        <div class="row" v-for="(sviesa, index) in description">
          <div class="col-sm-12">
            <div class="text-block">
              <h2 v-html="sviesa.description"></h2>
            </div>
            <table class="light">
              <tr>
                <th><h3>Klasė</h3></th>
                <th><h3>Pavadinimas</h3></th>
                <th><h3>Kiekis</h3></th>
              </tr>
              <tr v-for="visaSviesa in sviesa.info">
                <td><p v-html="visaSviesa.klase"></p></td>
                <td><p v-html="visaSviesa.pavadinimas"></p></td>
                <td><p v-html="visaSviesa.kiekis"></p></td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
    <modal v-if="isModalVisible" @close="closeModal" :sviesos="parametrai"></modal>
  </div>

</template>

<script>
  import modal from './elements/Popup-new'

  export default {
    name: "apsvietimas",
    data() {
      return {
        title: null,
        description: null,
        isModalVisible: false,
        parametrai: "",
      }
    },
    props: ['sviesos'],
    mounted() {
      let data = this.$store.getters.getAllData;
      this.title = data.apsvietimas_page.apsvietimas_title.name;
      this.description = data.apsvietimas_page.apvietimas;
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

<style scoped lang="scss">
  .lights {
    min-height: 80vh;
  }

  .light {

  }

  .title {
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../assets/images/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @include title()
  }

  a {
    img {
      background: $white;
      width: 100px;
    }
    @extend p;
  }

  .content {
    .img {
      width: 200px;
      //float: left;
    }
  }

  h2 {
    text-align: center;
    width: 100%;
  }

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      text-align: center;
    }
    .button-link {
      width: 250px;
      height: 50px;
      line-height: 50px;
      display: block;
    }
  }

  @media screen and (max-width: $break-mobile) {
    .box {
      flex-flow: column;
      align-items: center;
      .text {
        margin: 20px 0;
      }
    }
  }
</style>
