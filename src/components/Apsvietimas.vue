<template>
    <div class="content">
        <div class="title">
            <h1>{{title}}</h1>
        </div>
        <div class="container">
            <section v-for="(sviesa, index) in description">
                <div class="row"  v-if="index%2 === 0">
                    <div class="col-md-4">
                        <div class="content">
                            <img class="img" :src="sviesa.img"/>
                        </div>
                    </div>
                    <div class="col-md-4 offset-4">
                        <div class="content">
                            <h4>{{sviesa.title}}</h4>
                            <a @click="showModal(sviesa.kuriami_efektai)">
                                <img :src="sviesa.img"/>
                            </a>
                            <p>{{sviesa.kiekis}}</p>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-md-4">
                        <div class="content">
                                <h4>{{sviesa.title}}</h4>
                                <a @click="showModal(sviesa.kuriami_efektai)">
                                    <img :src="sviesa.img"/>
                                </a>
                                <p>{{sviesa.kiekis}}</p>
                        </div>
                    </div>
                    <div class="col-md-4 offset-4">
                        <div class="content">
                            <img class="img" :src="sviesa.img"/>
                        </div>
                    </div>
                </div>
                <hr>
            </section>

        </div>
        <modal v-if="isModalVisible" @close="closeModal" :sviesos="parametrai"></modal>
    </div>

</template>

<script>
    import modal from './elements/Popup-new'
    export default {
        name: "apsvietimas",
        data() {
            return {
                title: null,
                description: null,
                isModalVisible: false,
                parametrai: "",
            }
        },
        props : ['sviesos'],
        mounted() {
            let data = this.$store.getters.getAllData;
            this.title = data.apsvietimas_page.apsvietimas_title.name;
            this.description = data.apsvietimas_page.apvietimas;
        },
        methods: {
            showModal(parametrai) {
                this.isModalVisible = true;
                this.parametrai = parametrai;
                console.log(parametrai)
                //return parametrai
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

<style scoped lang="scss">
    @import '~$scss';

    .title {
        background-image: linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../assets/images/banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 5em 0;

    }
    a {
        cursor: pointer;
        img {
            background: $white;
            width: 100px;
        }
    }
    .content{
        .img{
            width: 200px;
        }
    }
</style>
