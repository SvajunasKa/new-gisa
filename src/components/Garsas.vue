<template>
    <div class="content">
        <div class="title">
            <h1>{{title}}</h1>
        </div>
        <div class="container">
            <section v-for="(garsas, index) in description">
                <div class="row"  v-if="index%2 === 0">
                    <div class="col-md-4">
                        <img :src="garsas.img">
                    </div>
                    <div class="col-md-8">
                        <p v-html="garsas.description"></p>
                        <p v-html="garsas.kiekis"></p>
                        <div class="text" v-if="garsas.more">
                            <a @click="showModal(garsas.info)" v-html="garsas.more"></a>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-md-8">
                        <p v-html="garsas.description"></p>
                        <p v-html="garsas.kiekis"></p>
                        <div class="text" v-if="garsas.more">
                            <a @click="showModal(garsas.info)" v-html="garsas.more"></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img :src="garsas.img">
                    </div>
                </div>
                <hr>
            </section>
        </div>
        <modal v-if="isModalVisible" @close="closeModal" :garsas="parametrai"></modal>
    </div>

</template>

<script>
    import modal from './elements/Popup-new'

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
            let data = this.$store.getters.getAllData;
            this.title = data.garsas_page.garsas_title.name;
            this.description = data.garsas_page.garsas;
        },
        methods: {
            showModal(parametrai) {
                this.isModalVisible = true;
                this.parametrai = parametrai;
                console.log(this.parametrai)
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
        components: {
            modal: modal
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        @include title();
    }
    img{
        width: 100%;
    }
</style>
