<template>
    <div class="content">
        <div class="title">
            <h1>{{title}}</h1>
        </div>
        <div class="container">
            <section v-for="(garsas, index) in description">
                <div class="row">
                    <div class="col-md-4">
                        <img :src="garsas.img">
                    </div>
                    <div class="col-md-8">
                        <p v-html="garsas.description"></p>
                    </div>
                </div>

            </section>
        </div>
    </div>

</template>

<script>
    export default {
        name: "garsas",
        data() {
            return {
                description: null,
                isModalVisible: false,
                parametrai: "",
            }
        },
        props: ["garsas"],
        mounted() {
            let data = this.$store.getters.getAllData;
            this.description = data.garsas_page.garsas;
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        @include title();
    }
</style>
