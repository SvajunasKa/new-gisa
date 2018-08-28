<template id="modal-template">
  <modal name="hello-world" @before-open="beforeOpen">
    <div class="v--modal-box">
     <slot></slot>

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
        console.log(event.params.foo);
        this.content = event.params.foo;
       // return event.params.foo;
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
