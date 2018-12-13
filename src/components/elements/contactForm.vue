<template>
    <div class="container">
        <form @submit.prevent="submit" action="../../../mailer.php" >
            <div class="field">
                <label for="name">Vardas</label>
                <input
                        type="text"
                        id="name"
                        name="name"
                        v-model="contacts.name"
                />
            </div>
            <div class="field">
                <label for="email">E-pastas</label>
                <input
                        type="text"
                        id="email"
                        name="email"
                        v-model="contacts.email"
                        :class="{invalid: $v.email.$error}"
                        @input="$v.email.$touch()"
                />

            </div>
            <div class="field">
                <label for="message">Zinute</label>
                <textarea id="message" v-model="contacts.message" name="message"></textarea>
            </div>
            <vue-recaptcha theme="dark" sitekey="6LdGPYEUAAAAAGdhI8vfqJSlbnC4WR88ChQJDtbO"
                           @verify="onVerify"
                           @expired="onExpired"
                           ref="invisibleRecaptcha">
            <button class="button" type="submit" name="submit" :disabled="$v.invalid">Siusti</button>
            </vue-recaptcha>
            <div class="responce" v-html="responseText">
            </div>
            <p v-html="error"></p>
        </form>


    </div>


</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    import axios from 'axios'
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: "contactForm",
        data() {
            return {
                contacts: {},
                error: "",
                responseText: null
            }
        },
        validations: {
            email: {
                required,
                email
            }
        },
        methods: {
            submit() {
                let form = document.querySelector("form");
                let url = form.getAttribute('action');

                this.errors = {};
                let formData = new FormData;
                let values = Object.values(this.contacts);
                for (let key in values) {
                    formData.append(key, values[key]);
                }
                this.$refs.invisibleRecaptcha.execute();

                axios.post("http://gisa-new.work/mailer.php", formData)
                    .then(res => {
                        this.responseText = res.data;
                    })
                    .catch(e => {
                        this.error = e.response.data;
                    })


            },
            onVerify: function (response) {
                console.log('Verify: ' + response)
            },
            onExpired: () => {
                console.log('Expired')
            },
            resetRecaptcha () {
                this.$refs.recaptcha.reset() // Direct call reset method
            }
        },
        components:{
            vueRecaptcha: VueRecaptcha
        }
    }

</script>

<style scoped lang="scss">

    form {
        padding: 100px 0;
    }

    .field {
        width: 100%;
        label {
            text-align: center;
            font-size: 16px;
            display: block;
            font-weight: 600;
            margin-bottom: 15px;
        }
    ;
        input {
            //height: 40px;
            line-height: 40px;
            &.invalid {
                border: 1px solid red;
            }
        }
        input, textarea {
            background: rgba(255, 255, 255, .075);
            border-radius: 3px;
            border: none;
            padding: 5px 15px;
            margin-bottom: 15px;
            width: 100%;
            &:focus {
                border: none;
            }
        }

    }
</style>
