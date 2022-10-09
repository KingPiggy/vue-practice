<template>
  <v-app>
    <Header></Header>
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header.vue"

export default {
  name: "app",
  components: {
    Header,
  }

}
</script>