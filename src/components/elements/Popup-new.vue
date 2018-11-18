<template>
    <transition name="modal-fade">
        <div class="modal-backdrop ">
            <div class="modal">
                <div v-if="papildomaInfo">
                    <div>
                        <button type="button"
                                class="btn-close"
                                @click="close">close
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div v-for="garsas in papildomaInfo.garsas">
                            <p v-html="garsas"></p>
                        </div>
                        <div v-for="sviesa in papildomaInfo.sviesa">
                            <p v-html="sviesa"></p>
                        </div>
                        <div v-for="info in papildomaInfo.info">
                            <p v-html="info"></p>
                        </div>

                    </div>
                </div>
                <div  v-if="sviesos">
                    <div>
                        <button type="button"
                                class="btn-close"
                                @click="close">close
                        </button>
                    </div>
                    <div class="modal-body">
                       <iframe :src="sviesos"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: "modal",
        props: ['papildomaInfo', "sviesos"],
        methods: {
            close() {
                this.$emit('close');
            }
        },
    }
</script>

<style scoped lang="scss">
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        max-width: calc(100% - 30px);
        height: auto;
        max-height: 500px;
        iframe{
            width: 560px ;
            height: 315px;
            border: none;
        }
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
        color: black;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>
