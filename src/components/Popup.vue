<template id="modal-template">
  <modal name="hello-world" @before-open="beforeOpen">
    <div class="v--modal-box">

    </div>

  </modal>
</template>

<script>
  export default {
    methods: {
      beforeOpen(event) {
        console.log(event.params.foo);
        return event.params.foo;
      }
    }
  };
</script>

<style scoped lang="scss">

  .v--modal-box {
    color: black;
  }
</style>
