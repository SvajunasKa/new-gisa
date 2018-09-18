<template>
    <div class="content">
        <div class="container">
            <div class="title">
                <h1>{{data.data.atlikti_darbai.darbai_title.name}}</h1>
            </div>
            <section v-for="data in data.data.atlikti_darbai.koncertai">
                <div class="spotlight">
                    <div class="title">
                        <h2>{{data.name}}</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-xs-2" v-for="(img, index) in data.images">
                            <img :src="img" @click="show(data.images, index)"></div>

                    </div>
                </div>
                <hr>
            </section>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "darbai",
        computed: {
            ...mapGetters([
                'data'
            ])
        },
        methods: {
            show(params, index) {
                this.$modal.show('images', {
                    foo: params,
                    index: index
                });
            },
        },

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

    img {
        width: 100%;
    }

    h2 {
        text-align: center;
    }

    .container {
        .spotlight {
            margin: 50px 0;
            .title {
                margin-bottom: 50px;
            }
        }
        .row {
            justify-content: center;
        }
    }


</style>
