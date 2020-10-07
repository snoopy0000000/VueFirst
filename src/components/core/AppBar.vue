<template>
  <v-app-bar color="white">
    <v-avatar class="logo">
      <img v-bind:src="require('../../assets/logo.svg')" alt="John" />
    </v-avatar>
    <v-toolbar-title>VUETIFY</v-toolbar-title>
    <router-link to="/" class="menu">Home</router-link>
    <router-link to="/gallery" class="menu">Gallery</router-link>
    <v-spacer></v-spacer>
    <!--중간 간격주기 붕 띄우기-->
    <v-btn>login</v-btn>
  </v-app-bar>
</template>

// /c:/Users/User/Document/protfolio/src/components/core/../../assets/logo.svg
// www.mydomain.com/../../assets/logo.svg

<script>
// @ is an alias to /src

export default {
  name: "AppBar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.logo {
  margin-right: 20px;
}
.menu {
  margin-left: 20px;
}
</style>
