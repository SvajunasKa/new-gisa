<template>
    <div class="content">
        <div class="container">
            <div class="title">
                <h1>{{data.data.sprendimai_page.offer_title.name}}</h1>
            </div>
            <section v-for="data in data.data.sprendimai_page.sprendimai">
                <div class="row">
                    <div class="col-md-5">
                        <div class="content">
                            <h4>{{data.name}}</h4>
                            <p>{{data.description}}</p>
                        </div>
                        <div class="link">
                            <button @click="show(data.img)">{{data.button_text}}</button>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="img" v-for="img in data.img">
                            <img :src="img">
                        </div>
                    </div>
                </div>
                <hr>
            </section>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import popup from './elements/Popup'

    export default {

        computed: {
            ...mapGetters([
                'data'
            ]),

        },
        created(){
            this.$store.dispatch("loadData")
        },
        methods: {

            show(params) {
                this.$modal.show('images', {
                    foo: params
                });
                this.$store.dispatch("loadData")
            },
            /* hide () {
               this.$modal.hide();
             }*/
        },
        components: {
            appPopup: popup
        }
    }

</script>

<style scoped lang="scss">
    @import '~$scss';

    .title {
        padding: 20px 0;
        h1 {
            @include h1();
        }
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
    }

    p {
        font-size: 16px;
        letter-spacing: 2px;
    }

    .content {

    }

</style>
