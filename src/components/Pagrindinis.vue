<template>
  <div class="content">
    <div class="heading">
      <transition name="slide-right" appear>
        <hr />
      </transition>
      <transition name="fade" appear>
        <h1 v-if="show">{{getAllData.banner_title.name}}</h1>
      </transition>
      <transition name="slide-left" appear>
        <hr />
      </transition>
    </div>
    <div class="banner">
      <div class="inner container">
        <div class="button" v-scroll-to="{el: '#main', duration: 800}">
          <a href="#">{{getAllData.button_text.name}}</a>
        </div>
        <h2 v-for="banner_text in getAllData.banner_text">{{banner_text}}</h2>
      </div>
    </div>
    <hr />
    <app-section
      :link_text="getAllData.audio.text"
      link="igarsinimo_technika"
      :img_link="getAllData.audio.src"
      imgLeft
    ></app-section>
    <hr />
    <app-section
      :link_text="getAllData.light.text"
      link="apsvietimo_technika"
      :img_link="getAllData.light.src"
    ></app-section>
    <hr />
    <app-section
      :link_text="getAllData.offer.text"
      link="sprendimai"
      :img_link="getAllData.offer.src"
      imgLeft
    ></app-section>
    <hr />
    <app-section
      :link_text="getAllData.projects.text"
      link="atlikti_darbai"
      :img_link="getAllData.projects.src"
    ></app-section>

    <hr />
    <app-section
      :link_text="getAllData.partners.text"
      link="musu_draugai"
      :img_link="getAllData.partners.src"
      imgLeft
    ></app-section>

    <hr />
    <section id="contact">
      <app-form></app-form>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import contactForm from "../components/elements/contactForm";
import section from "../components/elements/section";

export default {
  name: "pagrindinis",
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapGetters(["getAllData"])
  },
  mounted() {
    let data = this.$store.getters.getAllData;
    this.title = data.audio.text;
    console.log(this.title);
    document.body.className = "home";
  },
  destroyed: () => {
    document.body.className = "";
  },
  components: {
    appForm: contactForm,
    appSection: section
  }
};
</script>


<style lang="scss" scoped>
.heading {
  padding: 12vh 0;
}

section {
  background: $gray;
  opacity: 0.99999;
}

h1 {
  @include h1();
  position: relative;
  z-index: 1;
  font-family: $font;
  @include letter-space();
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 3s;
  transition-delay: 1s;
}

.slide-right-enter-active {
  animation: slide-in 1s;
}

.slide-left-enter-active {
  animation: slide-in-left 1s;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    width: 100%;
    transform: translateX(0);
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    width: 100%;
  }
}

.banner {
  height: 80vh;
  text-align: center;
}

.button {
  display: inline-block;
  margin: 5vh 0;
  background-color: $red;
  line-height: 3;
  border: none;
  border-radius: 3px;
  color: $white;
  width: 300px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  a {
    color: $white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 20px 60px;
    border-radius: 3px;
    font-size: 18px;
  }
}

h2 {
  font-size: 20px;
  font-family: $font;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.3;
  @include letter-space();
}

img {
  width: 100%;
}

@media screen and (max-width: $break-mobile) {
  .banner {
    height: auto;
  }
}
</style>
