<template>
  <div>
    <transition name="slide-fade2" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CoreView",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade2-enter-active {
  transition: all 0.3s ease;
}
.slide-fade2-leave-active {
  transition: all 0.3s ease;
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(400px);
  opacity: 0;
}
</style>