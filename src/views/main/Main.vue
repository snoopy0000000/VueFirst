<template>
  <div class="main">
    <main-banner></main-banner>
    <about-me></about-me>
    <features></features>
    <parallax></parallax>
    <blog></blog>
    <vuex-ex></vuex-ex>
    <contact-me></contact-me>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
  components: {
    MainBanner: () => import("@/components/main/Mainbanner.vue"),
    AboutMe: () => import("@/components/main/AboutMe.vue"),
    Features: () => import("@/components/main/Features.vue"),
    Parallax: () => import("@/components/main/Parallax.vue"),
    Blog: () => import("@/components/main/Blog.vue"),
    VuexEx: () => import("@/components/main/VuexEx.vue"),
    ContactMe: () => import("@/components/main/ContactMe.vue")
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