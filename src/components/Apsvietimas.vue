<template>
  <div class="content">
    <div v-for="data in wpData" v-if="data.slug === 'apsvietimas'">
      <div class="title">
        <h1 v-html="title"></h1>
      </div>
      <div class="container">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <div class="text-block">
                <div class="light" v-html="data.content.rendered"></div>
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
    name: "apsvietimas",
    data() {
      return {
        title: null,
        description: null,
        isModalVisible: false,
        parametrai: "",
      }
    },
    mounted() {
      this.$store.dispatch('loadData');
    },
    computed: mapState([
      'wpData'
    ])

  }
</script>

<style scoped lang="scss">
  .lights {
    min-height: 80vh;
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
