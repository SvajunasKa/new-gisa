<template>
  <transition name="modal-fade">
    <div class="modal-backdrop ">
      <div class="container">
        <div class="modal">
          <div v-if="komplektai">
            <div class="button-container">
              <button type="button"
                      class="btn-close"
                      @click="close">×
              </button>
            </div>
            <div class="modal-body ">
              <div v-for="(key, value) in papildomaInfo">
                <p><b v-html="value"></b></p>
                <p v-for="data in key" v-html="data"></p>
              </div>
            </div>
          </div>
          <div v-if="sviesos">
            <div>
              <button type="button"
                      class="btn-close"
                      @click="close">×
              </button>
            </div>
            <div class="modal-body">
              <iframe :src="sviesos"></iframe>
            </div>
          </div>
          <div v-if="garsas">
            <div class="button-container">
              <button type="button"
                      class="btn-close"
                      @click="close">×
              </button>
            </div>
            <div class="modal-body ">
              <img v-if="garsas.img" :src="garsas.img">
              <div v-else  v-for="item in garsas">
                <div  class="modal-title">
                  <h3><b>{{item.title}}</b></h3>
                </div>
                <div class="modal-content">
                  <p v-for="aaa in item.aprasymas" v-if="item.aprasymas" v-html="aaa"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>

  export default {
    name: "modal",
    props: ['komplektai', "sviesos", "garsas"],
    methods: {
      close() {
        this.$emit('close');
      }
    },
  }
</script>

<style scoped lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal {
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 200px);
    height: auto;
    max-height: 500px;
    margin: 0 auto;
    iframe {
      width: 560px;
      height: 315px;
      border: none;
    }
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.8s ease
  }

  .modal-body {
    position: relative;
    padding: 0 40px 50px 40px;
    color: black;
    overflow-y: auto;
    height: auto;
    max-height: 450px;
    h3, p {
      text-align: center;
    }
    .modal-content {
      //height: 350px;
      display: flex;
     justify-content: center;
      flex-flow: column;
    }
    img{
      width: 100%;
    }
  }

  .button-container {
    position: relative;
    height: 50px;
    .btn-close {
      right: -10px;
      top: -25px;
      position: absolute;
      border: none;
      padding: 20px;
      cursor: pointer;
      font-weight: 700;
      color: #aaa;
      font-family: $font;
      font-size: 50px;
      background: transparent;
    }
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  @media screen and (max-width: $break-tablet) {
    .modal {
      max-width: calc(100% - 5px);
    }
  }
</style>
