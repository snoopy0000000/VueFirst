<template>
  <div class="main">
    <main-banner></main-banner>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
  components: {
    MainBanner: () => import("@/components/main/Mainbanner.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main {
}
</style>