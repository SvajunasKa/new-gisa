<template>
    <transition name="modal-fade">
        <div class="modal-backdrop ">
            <div class="modal">
                <div v-if="komplektai">
                    <div class="container">
                        <div class="button-container">
                            <button type="button"
                                    class="btn-close"
                                    @click="close">×
                            </button>
                        </div>
                        <div class="modal-body ">
                            <div v-for="(key, value) in komplektai">
                                <h3><b v-html="value"></b></h3>
                                <p v-for="data in key" v-html="data"></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="sviesos">
                    <div class="container">
                        <div class="button-container">
                            <button type="button"
                                    class="btn-close"
                                    @click="close">×
                            </button>
                        </div>

                        <div class="modal-body">
                            <iframe :src="sviesos"></iframe>
                        </div>
                    </div>

                </div>
                <div v-if="garsas">
                    <div class="container">
                        <div class="button-container">
                            <button type="button"
                                    class="btn-close"
                                    @click="close">×
                            </button>
                        </div>
                        <div class="modal-body ">
                              <table class="sound">
                                <tr>
                                  <th><h3>Klasė</h3></th>
                                  <th><h3>Pavadinimas</h3></th>
                                  <th><h3>Kiekis</h3></th>
                                </tr>
                                <tr v-for="visasGarsas in garsas.info">
                                  <td><p v-html="visasGarsas.klase"  ></p></td>
                                  <td><p v-html="visasGarsas.pavadinimas"></p></td>
                                  <td><p v-html="visasGarsas.kiekis"></p></td>
                                </tr>
                              </table>
                            </div>
                        </div>
                    </div>
                <div v-if="darbai">
                    <div class="button-container">
                        <div class="text-center">
                            <p v-html="darbai[0].name"></p>
                        </div>
                        <button type="button"
                                class="btn-close"
                                @click="close">×
                        </button>

                    </div>
                    <div class="modal-content">
                        <img class="darbai-img" :src="darbai[0].images[index]"/>
                    </div>
                    <div class="button-container">
                        <div class="next" @click="next()" :class="{hide: isHide, nextHide}"></div>
                        <div class="prev" @click="prev()" :class="{hide: isHide1, prevHide}"></div>
                    </div>
                </div>
                </div>

            </div>



    </transition>
</template>

<script>

    export default {
        name: "modal",
        data() {
            return {
                index: null,
                isHide: false,
                isHide1: false
            }
        },
        props: ["komplektai", "sviesos", "garsas", "darbai"],
        computed: {
            nextHide() {
                let keys = Object.keys(this.darbai[0].images);
                if (this.index === keys.length - 1) {
                    this.isHide = true;
                } else {
                    this.isHide = false;
                }
            },
            prevHide() {
                if (this.index == 0) {
                    this.isHide1 = true
                } else {
                    this.isHide1 = false
                }
            }
        },

        methods: {
            next() {
                this.index++;
            },
            prev() {
                this.index--;
            },
            close() {
                this.$emit('close');
            },
            getIndex() {
                if(this.darbai)
                    this.index = this.darbai[1];
            }

        },
        beforeMount() {
            this.getIndex();
        }
    }
</script>

<style scoped lang="scss">
    .text-center {
        text-align: center;
        display: inline-block;
        width: 100%;
        p {
            color: black;
            margin: 0;
        }
    }

    .prev {
        position: absolute;
        left: 10px;
        top: 15px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 20px 10px 0;
        border-color: transparent black transparent transparent;
        cursor: pointer;
    }

    .next {
        position: absolute;
        right: 10px;
        top: 15px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 10px 20px;
        border-color: transparent transparent transparent black;
        cursor: pointer;
    }

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
        max-height: 570px;
        margin: 0 auto;
        iframe {
            width: 100%;
            height: 400px;
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
        img {
            width: 100%;
        }
    }

    .modal-content {
        //height: 350px;
        display: flex;
        justify-content: center;
        flex-flow: column;
    }

    .darbai-img {
        max-height: 470px;
        width: auto;
    }

    .button-container {
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;
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

    .hide {
        display: none;
    }

    @media screen and (max-width: $break-mobile) {
        .modal {
            max-width: calc(100% - 25px);
            iframe {
                width: 100%;
                height: auto;
            }
        }
        .darbai-img {
            width: 100%;
        }
        .modal-body {
            padding: 0 5px 50px 5px;
        }
    }
</style>
