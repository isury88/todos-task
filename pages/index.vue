<template>
  <div>
    <v-row style="height:60vh">
      <v-col cols="12" sm="8" md="6" class="mx-auto d-flex flex-column justify-center align-center">
        <h1 class="my-5 text-center">Welcome to the Todos App</h1>
        <p class="text-center"><v-btn @click="$router.push('/login')">Login</v-btn> to access your Dashboard </p>
      </v-col>
    </v-row>
  </div>
</template>
