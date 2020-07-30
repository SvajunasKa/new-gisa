<template>
  <section v-if="`${imgLeft}`">
    <div class="container">
      <div class="row flex">
        
        <div class="col-md-4">
          <div class="img">
            <img :src="`${img_link}`" />
          </div>
        </div>
        <div class="col-md-8">
          <div class="text">
            <router-link :to="{path: `${link}`}">{{ link_text }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text">
            <router-link :to="{path: `${link}`}">{{ link_text }}</router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="img">
            <img :src="`${img_link}`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["link_text", "link", "img_link", "imgLeft"]
};
</script>
<style lang="scss" scoped>
.col-md-8 {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  .row {
    border-left: none;
    border-right: none;
    padding-top: 20px;
    padding-bottom: 20px;
    &:nth-child(odd) {
      border-top: none;
    }
  }
}

.text {
  text-align: center;
  a {
    @include link();
    font-size: 22px;
    font-weight: bold;
  }
}
img {
  width: 100%;
}
@media screen and (max-width: $break-mobile) {
  .flex {
    display: flex;
    .col-md-4 {
      order: 2;
    }
    .col-md-8 {
      order: 1;
    }
  }
  .row {
    .text {
      padding: 10px 0 30px 0;
    }
  }
}
</style>
