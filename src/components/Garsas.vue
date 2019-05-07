<template>
    <div class="content">
        <div v-for="data in wpData" v-if="data.slug === 'garsas'">
            <div class="title" >
                <h1>Garso aparatūra</h1>
            </div>
            <div class="container">
                <section>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="text-block" @click="showModal(data.content.rendered)">
                                <h2 v-html="data.content.rendered"></h2>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <modal v-if="isModalVisible" @close="closeModal" :garsas="parametrai" @click="showModal(data.content.rendered)"></modal>
        </div>
    </div>
</template>

<script>
    import modal from './elements/Popup-new'
    import {mapState} from 'vuex'

    export default {
        name: "garsas",
        data() {
            return {
                title: null,
                description: null,
                isModalVisible: false,
                parametrai: "",
            }
        },
        props: ["garsas"],
        mounted() {
            //let data = this.$store;
            //console.log(data)
            //this.title = data.garsas_page.garsas_title.name;
            //this.description = data.garsas_page.garsas;
            this.$store.dispatch('loadData')
        },
        methods: {
            showModal(parametrai) {
                this.isModalVisible = true;
                this.parametrai = parametrai;
                console.log(parametrai)
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
        computed: mapState([
            'wpData'
        ]),
        components: {
            modal: modal
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../assets/images/audio1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        @include title();
    }

    .img-box {
        width: 200px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            cursor: pointer;
        }
    }

    .text-block {
        text-align: center;
        display: flex;
        align-items: center;
        //height: 170px;
        flex-flow: column;
        justify-content: center;
        cursor: pointer;
    }

    .button-link {
        width: 250px;
        height: 50px;
        line-height: 50px;
        display: block;
    }

    @media screen and (max-width: $break-mobile) {
        .flex {
            display: flex;
            .col-md-4 {
                order: 1;
            }
            .col-md-8 {
                order: 2;
            }
        }
        .img-box {
            width: 100%;
            height: auto;
        }
    }

</style>
