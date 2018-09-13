<template id="modal-template">
  <modal name="images" @before-open="beforeOpen">
    <div class="v--modal-box">
        <div @click="hide()">X</div>
        <img :src="content[0]"/>
    </div>
  </modal>
</template>

<script>
  export default {
    data(){
      return {
        content: []
      }
    },
    methods: {
      beforeOpen(event) {
        this.content = event.params.foo;
      },
      hide(){
          this.$modal.hide("images");
      }
    }
  };
</script>

<style scoped lang="scss">

  .v--modal-box {
    color: black;
    background: white;
  }
</style>
