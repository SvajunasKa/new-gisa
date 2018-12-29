<template>
    <div class="content">
        <div class="heading">
            <transition name="slide-right" appear>
                <hr>
            </transition>
            <transition name="fade" appear>
                <h1 v-if="show">{{getAllData.banner_title.name}}</h1>
            </transition>
            <transition name="slide-left" appear>
                <hr>
            </transition>
        </div>
        <div class="banner">
            <div class="inner container">
                <div class="button" v-scroll-to="{el: '#main', duration: 800}">
                    <a href="#">{{getAllData.button_text.name}}</a>
                </div>
                <h2 v-for="banner_text in getAllData.banner_text">
                    {{banner_text}}
                </h2>
            </div>
        </div>
        <hr>
        <section>
            <div class="container" id="main">
                <div class="row flex">
                    <div class="col-md-4">
                        <div class="img">
                            <img :src="getAllData.audio.src"/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="text">
                            <router-link to="/apsvietimo_technika">{{getAllData.audio.text}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="text">
                            <router-link to="/igarsinimo_technika">{{getAllData.light.text}}</router-link>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="img">
                            <img :src="getAllData.light.src"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section>
            <div class="container">
                <div class="row flex">
                    <div class="col-md-4">
                        <div class="img">
                            <img :src="getAllData.offer.src"/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="text">
                            <router-link to="/sprendimai">{{getAllData.offer.text}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="text">
                            <router-link to="/atlikti_darbai">{{getAllData.projects.text}}</router-link>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="img">
                            <img :src="getAllData.projects.src"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section>
            <div class="container">
                <div class="row flex">
                    <div class="col-md-4">
                        <div class="img">
                            <img :src="getAllData.partners.src"/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="text">
                            <router-link to="/musu_draugai">{{getAllData.partners.text}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section id="contact">
            <app-form></app-form>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import contactForm from '../components/elements/contactForm'

    export default {
        name: 'pagrindinis',
        data() {
            return {
                show: true
            }
        },
        computed: {
            ...mapGetters([
                'getAllData'
            ])
        },
        mounted() {
            document.body.className = 'home';
        },
        destroyed: () => {
            document.body.className = '';
        },
        components: {
            appForm: contactForm
        }

    }

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

    .text {
        text-align: center;
        a {
            @include link();
            font-size: 22px;
            font-weight: bold;
        }
    }

    .col-md-8 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        .row {
            // border: 3px solid rgba(0, 0, 0, 0.1);
            border-left: none;
            border-right: none;
            padding-top: 20px;
            padding-bottom: 20px;
            &:nth-child(odd) {
                border-top: none;
            }
        }

    }

    @media screen and (max-width: $break-mobile) {
        .banner {
            height: auto;
        }
        .flex {
            display: flex;
            .col-md-4 {
                order: 2;
            }
            .col-md-8 {
                order: 1;
            }
        }
        .row{
            .text {
                padding: 10px 0 30px 0;
            }
        }
    }

</style>
