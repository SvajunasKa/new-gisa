<template>
  <div class="container">
    <form>
      <div class="field">
        <label for="name">Vardas</label>
        <input
          type="text"
          id="name"
        />
      </div>
      <div class="field">
        <label for="email">E-pastas</label>
        <input
          type="text"
          id="email"
          :class="{invalid: $v.email.$error}"
          @input="$v.email.$touch()"
        />

      </div>
      <div class="field">
        <label for="message">Zinute</label>
        <textarea id="message"></textarea>
      </div>

      <button class="button" type="submit" :disabled="$v.invalid">Siusti</button>
    </form>
  </div>

</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'

  export default {
    name: "contactForm",

    validations: {
      email: {
        required,
        email
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '~$scss';

  form {
    padding: 100px 0;
  }

  .field {
    //width: 100%;
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
