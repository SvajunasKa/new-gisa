<template>
    <div class="container">
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
            <button class="button" type="submit" name="submit" :disabled="$v.invalid">Siųsti</button>
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
                let capchaRes = grecaptcha.getResponse();
                console.log(capchaRes)
                if (capchaRes.length > 0) {
                    axios.post("http://test.utechna.lt/mailer.php", {
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
                    this.error = "užpildykite formą"
                }
            }
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
