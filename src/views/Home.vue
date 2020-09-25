<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <core-footer></core-footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreView: () => import("@/components/core/View.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue")
  },
  data() {
    return {
      eventH1: "이건 EventH1"
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style lang="scss">
.home {
}
</style>
