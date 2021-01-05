<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-card-title>Most Used Words</v-card-title>
    </v-app-bar>

    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',

  components: {
    Home
  },

  data: function(){
    return {

    }
  }
};
</script>
