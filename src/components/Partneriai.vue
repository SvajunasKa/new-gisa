<template>
    <div class="content">
            <div class="title">
                <h1 v-html="title"></h1>
            </div>
        <div class="container">
            <hr>
            <section v-for="data in description">
                <div class="name">
                    <h2 v-html="data.name"></h2>
                </div>
                <a :href="data.link" target="_blank" rel="nofollow">
                    <img :src="data.images"/>
                </a>
            </section>
            <hr>
        </div>

    </div>

</template>

<script>
    export default {
        name: "partneriai",
        data(){
            return{
                title: "",
                name:"",
                description: ""
            }
        },
        mounted(){
            let data = this.$store.getters.getAllData;
            this.title = data.partneriai.title.name;
            this.description = data.partneriai.draugai;
        }
    }
</script>

<style scoped lang="scss">
    .title{
        @include title();
    }
    .name{
        margin: 30px 0;
        text-align: center;
    }
    section{
        img{
            width: 100%;
        }
    }

</style>
