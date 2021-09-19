<template>
  <div>
  <v-row>
    <v-col cols="12" sm="8" md="6" class="mx-auto">
      <h1 class="my-5 text-center">Welcome to the Todos App</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="10" md="6" class="mx-auto mt-5">
     <v-form v-model="valid" @submit.prevent="loginUser(auth)">
      <v-card elevation="4" shaped>
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login to access your Todo Dashboard</v-card-subtitle>
        <v-card-text class="px-5">
          <v-text-field v-model="auth.email" label="Email" prepend-icon="mdi-account" :rules="[required('email'), emailFormat()]" />
          <v-text-field
          v-model="auth.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          counter=true
          :rules="[required('password'), minLength(auth.password, 8)]"
          @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text :disabled="!valid" type="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    </v-col>
  </v-row>
  <v-snackbar
  v-model="snackbar"
  :timeout="4000"
  absolute
  bottom
  color="success"
  outlined
  right>
  {{ snackbarText }}
  </v-snackbar>
  </div>

</template>

<script>
import validations from '@/utils/validations';

export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
        valid: false,
      showPassword: false,
      auth: {
        email: '',
        password: ''
      },
      ...validations
    }
  },

  mounted() {
    if (this.$fire.auth.currentUser !== null) {
      // User is logged in
      this.$router.push('/dashboard')
    }
  },

  methods: {
    async loginUser(auth) {
      const that = this
      await this.$fire.auth.signInWithEmailAndPassword(auth.email, auth.password)
      .catch((error) => {
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        if (user) {
           this.$router.push('/dashboard')
        }

      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
