<template>
    <div class="content">
        <div class="container">
            <div class="title">
                <h1>{{darbai_title}}</h1>
            </div>
            <hr>
            <app-loading v-if="isLoading"></app-loading>
            <section v-for="data in images">
                <div class="spotlight">
                    <div class="subtitle">
                        <h2>{{data.name}}</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-xs-4" v-for="(img, index) in data.images">
                            <img src="" v-lazy="img" @click="showModal(data, index)">
                        </div>
                    </div>
                </div>
                <hr>
            </section>
        </div>
      <modal v-if="isModalVisible" @close="closeModal" :darbai="[parametrai, index]"></modal>
    </div>
</template>

<script>
   // import VueLazyload from 'vue-lazyload'
    import axios from 'axios'
    import Loading from './elements/Loading'
   import modal from './elements/Popup-new'

    export default {
        name: "darbai",
        data() {
            return {
                darbai_title: null,
                images: null,
                isLoading: true,
              isModalVisible: false,
              parametrai: "",
              index: ""
            }
        },
      props: ["darbai"],
        mounted() {
            axios.get('../../src/Api/data.json')
                .then(res => {
                    this.darbai_title = res.data.atlikti_darbai.darbai_title[0];
                    this.images = res.data.atlikti_darbai.koncertai;
                    this.isLoading = false;
                })
                .then()
                .catch(error => console.log(error));
        },
        methods: {
          showModal(parametrai, index) {
            this.isModalVisible = true;
            this.parametrai = parametrai;
            this.index = index;
            //console.log(this.index)
          },
          closeModal() {
            this.isModalVisible = false;
          }
        },
        components: {
            appLoading: Loading,
          modal:modal
        }
    }
</script>

<style scoped lang="scss">

    .title {
        @include title();
        h1 {
            @include h1();
        }
    }

    img {
        width: 100%;
    }

    h2 {
        text-align: center;
    }
    .container {
        .spotlight {
            margin: 50px 0;
            .title {
                margin-bottom: 50px;
            }
        }
        .row {
            justify-content: center;
        }
    }
    .v-lazy-image {
        filter: blur(10px);
        transition: filter 0.7s;
    }
    .v-lazy-image-loaded {
        filter: blur(0);
    }
  img{
    cursor: pointer;
    max-width: 250px;
  }
  .subtitle{
    margin: 30px 0;
  }

</style>
