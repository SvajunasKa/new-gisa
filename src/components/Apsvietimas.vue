<template>
  <div class="content">
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="container">
      <section v-for="(sviesa, index) in description">
        <div class="row" v-if="index%2 === 0">
          <h2>{{sviesa.title}}</h2>
          <div class="col-md-7 offset-md-5">
            <div class="content">

              <div class="box">
                <img class="img" :src="sviesa.img"/>
                <a @click="showModal(sviesa.kuriami_efektai)">
                  <img :src="sviesa.img"/>
                </a>
                <div class="text">
                  <p>{{sviesa.kiekis}}</p>
                  <a @click="showModal(sviesa.kuriami_efektai)">{{sviesa.efektai}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <h2>{{sviesa.title}}</h2>
          <div class="col-md-7">
            <div class="content">

              <div class="box">
                <img class="img" :src="sviesa.img"/>
                <a @click="showModal(sviesa.kuriami_efektai)">
                  <img :src="sviesa.img"/>
                </a>
                <div class="text">
                  <p>{{sviesa.kiekis}}</p>
                  <a @click="showModal(sviesa.kuriami_efektai)">{{sviesa.efektai}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
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
      console.log(data)
      this.title = data.apsvietimas_page.apsvietimas_title.name;
      this.description = data.apsvietimas_page.apvietimas;
    },
    methods: {
      showModal(parametrai) {
        this.isModalVisible = true;
        this.parametrai = parametrai;
        //return parametrai
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

  .title {
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../assets/images/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 5em 0;
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
    align-items: flex-end;
  }
</style>
