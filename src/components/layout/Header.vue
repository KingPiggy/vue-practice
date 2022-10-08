<template>
  <v-app>
    <v-app-bar app light flat >
      
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-avatar class="ml-5" :tile="true">
        <img :src="require('@/assets/logo.png')" alt="logo">
      </v-avatar>

      <v-app-bar-title>Hello World</v-app-bar-title>

      <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

      <v-spacer></v-spacer>

      <v-btn color="blue" icon><v-icon>mdi-thumb-up</v-icon></v-btn>
      <v-btn color="red" icon><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn color="yellow" icon><v-icon>mdi-star</v-icon></v-btn>

    </v-app-bar>
  </v-app>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "header",
  data: () => ({
    links: ["MENU1", "MENU2", "MENU3"],
  }),
};
</script>
<style>
.v-toolbar__content{
  border-bottom: 0.1px solid gainsboro;
}
</style>