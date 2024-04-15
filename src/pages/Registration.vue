<template>
  <div class="mt-5">
    <h1>Registration</h1>
    <h4>Create a new account</h4>

    <b-row class="mt-4">
      <b-col cols="6">
        <label>Login</label>
        <b-input v-model="login" />
        <label class="mt-2">Password</label>
        <b-input v-model="password" type="password" />
        <b-button class="mt-3" variant="primary" @click="registration">Регистрация</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Registration extends Vue {
  login = '';
  password = '';

  async registration() {
    const response = await fetch('http://localhost/registration/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        login: this.login,
        password: this.password
      })
    });
    const payload = await response.json();

    if (payload.status === 'failed') {
      this.$bvModal.msgBoxOk('Такой аккаунт уже существует', { centered: true });
    }

    if (payload.status === 'success') {
      this.$bvModal.msgBoxOk('Регистрация успешна', { centered: true });
    }
  }
}
</script>