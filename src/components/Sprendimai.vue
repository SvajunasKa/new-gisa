<template>
    <div class="content">
        <div class="container">
            <div class="title">
                <h1 v-html="title"></h1>
            </div>
            <section v-for="(data, index) in description">
                <div class="row" >
                    <div class="col-md-4">
                        <div class="content">
                            <h4 v-html="data.name"></h4>
                            <p v-html="data.description"></p>
                        </div>
                        <div class="link">
                            <button class="button-link" @click="showModal(data.papildoma_info)" v-html="data.button_text"></button>
                        </div>
                    </div>
                    <div class="col-md-6 offset-2">
                        <div class="img" v-for="img in data.img">
                            <img :src="img">
                        </div>
                    </div>

                </div>
<!--                <div class="row" v-else>-->
<!--                    <div class="col-md-4">-->
<!--                        <div class="img" v-for="img in data.img">-->
<!--                            <img :src="img" }>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-6 offset-2">-->
<!--                        <div class="content">-->
<!--                            <h4 v-html="data.name"></h4>-->
<!--                            <p v-html="data.description"></p>-->
<!--                        </div>-->
<!--                        <div class="link">-->
<!--                            <button class="button-link"  @click="showModal(data.papildoma_info)" v-html="data.button_text"></button>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
                <hr>
            </section>
        </div>
        <modal v-if="isModalVisible" @close="closeModal" :komplektai="parametrai"></modal>
    </div>

</template>

<script>
    import modal from './elements/Popup-new'
    export default {
        data() {
            return {
                title: null,
                description: null,
                show: false,
                isModalVisible: false,
                parametrai: "",
            }
        },
        mounted() {
            let data = this.$store.getters.getAllData;
            this.title = data.sprendimai_page.offer_title.name;
            this.description = data.sprendimai_page.sprendimai;
        },
        methods: {
            showModal(parametrai) {
                this.isModalVisible = true;
                this.parametrai = parametrai;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
        components:{
            modal:modal
        }

    }

</script>

<style scoped lang="scss">
    .title{
        @include title();
    }
    .img {
        display: inline-block;
        width: 50%;
        img {
            display: inline-block;
            width: 97%;
        }
    }

    h4 {
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 0.225em;
    }
    .button-link{
        width: 250px;
        height: 50px;
        line-height: 50px;
        display: block;
    }
</style>
