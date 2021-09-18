<template>
  <v-app dark>
    <v-app-bar
      app
    >
      <v-btn text @click="$router.push('/dashboard')"><v-toolbar-title v-text="title" /></v-btn>

      <v-spacer />


      <div v-if="user">
        <span>{{ user.email }}</span>
        <v-btn text @click="logout">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text @click="$router.push('/login')">Login</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; Riccardo Venturini {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Todos',
      user: ''
    }
  },
  mounted() {
    this.$fire.auth.onAuthStateChanged((user) => {
      this.user = user
    })
  },

  methods: {
    logout() {
       this.$fire.auth.signOut().then(result => {
         this.user = ''
         window.location.reload()
       })
    }
  }
}
</script>
