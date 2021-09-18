<template>
  <div>
    <v-row>
      <v-col cols="12" sm="8" md="6" class="mx-auto">
        <h1 class="my-5 text-center">Welcome {{ user ? user.email : '' }} to your Dashboard</h1>
        <div class="d-flex align-center">
          <v-text-field v-model="search" class="pa-5" placeholder="Search Todo by title">
            Search by title
          </v-text-field>
           <v-select
            v-model="userId"
            :items="userIds"
            label="Select a todo by USERID"
            dense
            @change="getTodosFromApi()"
            ></v-select>
        </div>
        <v-btn-toggle v-model="toggle_exclusive" class="d-flex justify-center" group tile>
          <v-btn text color="primary" @click="getTodosFromApi()">All</v-btn>
          <v-btn text color="success" @click="getTodosFromApi(true)">Completed</v-btn>
          <v-btn text color="error" @click="getTodosFromApi(false)">Not Completed</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col
      v-for="todo in filteredToDosSearch"
      :key="todo.id"
      cols="12"
      sm="6" md="4">
      <v-card height="8rem">
        <v-card-title height="8rem">Task ID: {{ todo.id }} - User ID: {{ userId }}
          <v-spacer></v-spacer>
          <v-icon :color="todo.completed ? 'green' : 'error'">{{ todo.completed ? 'mdi-check-circle' : 'mdi-close-circle' }}</v-icon>
          </v-card-title>
          <v-divider></v-divider>
        <v-card-text class="pa-3">
          {{ todo.title }}
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios';
export default {

  data() {
    return {
      search: '',
      filteredToDos: [],
      toggle_exclusive: 0,
      user: '',
      userIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      userId: 1
    }
  },

computed: {
  filteredToDosSearch() {
    return  this.filteredToDos.filter((todo) => {
      return todo.title.toLowerCase().match(this.search)
    })
  }
  },

  mounted() {
    this.getTodosFromApi()
  },

  methods: {
     async getTodosFromApi(status = null) {
       const userIDToLoad = `${process.env.API_URL}todos?userId=${this.userId}`
      await axios.get(status !== null ? `${userIDToLoad}&completed=${status}` : userIDToLoad)
        .then((response) => {
          const todos = [];
          for(const id in response.data) {
            todos.push(response.data[id])

            this.filteredToDos = todos;
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },

  },


}
</script>


