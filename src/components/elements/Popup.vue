<template id="modal-template">
    <modal name="images" @before-open="beforeOpen">
        <div class="v--modal-box">
            <div @click="hide()">X</div>
            <div id="index" @click="next()" :class="{hide: isHide, slepti}">next</div>
            <img :src="content[index]"/>
        </div>
    </modal>
</template>

<script>
    export default {
        data() {
            return {
                content: [],
                index: undefined,
                isHide: false
            }
        },
        computed:{
            slepti(){
                var keys = Object.keys(this.content);
                if (this.index === keys.length-1) {
                    this.isHide = true;
                }
            }

        },
        methods: {
            beforeOpen(event) {
                this.content = event.params.foo;
                this.index = event.params.index;
            },
            hide() {
                this.$modal.hide("images");
                this.index = 0;
                this.isHide = false;
            },
            next() {
                this.index++;
            },
        }
    };
</script>

<style scoped lang="scss">

    .v--modal-box {
        color: black;
        background: white;

    }
    .hide {
        display: none;
    }

    img {
        width: 100%;
    }
</style>
