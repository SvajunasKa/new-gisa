<template>
    <div class="container" id="contact">
        <div class="contact-text">
            <h3 v-html="title"></h3>
            <h3 v-for="data in description">{{data}}</h3>
            <p v-html="info"></p>
        </div>
        <form @submit.prevent="submit" action="../../../mailer.php">
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
                <label for="email">E-paštas</label>
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
                <label for="message">Žinute</label>
                <textarea id="message" v-model="contacts.message" name="message"></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6Le2KYEUAAAAAH-E4q5lP5t9uhvthBDYBKLoqcFX"></div>
            <button class="button-link" type="submit" name="submit" :disabled="$v.invalid">Siųsti</button>
            <div class="responce" v-html="responseText"></div>
            <p v-html="error"></p>
        </form>


    </div>


</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    import axios from 'axios'

    export default {
        name: "contactForm",
        data() {
            return {
                contacts: {},
                error: "",
                responseText: null,
                title:"",
                description:"",
                info:""
            }
        },
        validations: {
            email: {
                required,
                email
            }
        },
        mounted() {
            let data = this.$store.getters.getAllData;
            this.title = data.kontaktai.title.name;
            this.description = data.kontaktai.description;
            this.info = data.kontaktai.info.text
        },
        methods: {
            submit() {
                let formData = new FormData;
                let values = Object.values(this.contacts);
                for (let key in values) {
                    formData.append(key, values[key]);
                }
                let capchaRes = grecaptcha.getResponse();
                if (capchaRes.length > 0) {
                    axios.post("../../mailer.php", {
                        data: {
                            'name': this.contacts.name,
                            'email': this.contacts.email,
                            'message':this.contacts.message,
                            'capcha':capchaRes
                        }
                    })
                        .then(res => {
                            this.responseText = res.data;

                        })
                        .catch(e => {
                            this.error = e.response.data;
                        })
                } else {
                    this.error = "Užpildykite formą"
                }
            }
        }
    }

</script>

<style scoped lang="scss">
    .contact-text{
        padding-top: 50px;
        text-align: center;

    }
    form {
        padding: 50px 0;
    }
    .field {
        width: 100%;
        label {
            text-align: center;
            font-size: 16px;
            display: block;
            font-weight: 600;
            margin-bottom: 15px;
            letter-spacing: 3.5px;
        }
    ;
        input {
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
            color: $white;
            font-size: 16px;
            font-family: $font;
            &:focus {
                border: none;
            }
        }
        textarea{
            height: 100px;
        }
    }

</style>
