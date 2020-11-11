<template>
  <div class="image-card" @mouseover="mouseover" @mouseleave="mouseleave">
    <transition name="fade">
      <div v-if="isMouseOver" class="cover">
        <v-row justify="center" align="center" style="height: 100%;">
          <div class="content-wrapper">
            <v-avatar color="#efa053">
              <v-icon dark large>
                mdi-link
              </v-icon>
            </v-avatar>
            <h4>{{ author }}</h4>
          </div>
        </v-row>
      </div>
    </transition>

    <v-img :src="url" aspect-ratio="1.7"></v-img>
  </div>
</template>

<script>
export default {
  name: "imagecard",
  props: ["url", "author"],
  data() {
    return {
      isMouseOver: false
    };
  },
  methods: {
    mouseover() {
      console.log("mouse up!!");
      this.isMouseOver = true;
    },
    mouseleave() {
      console.log("mouse leave!!!");
      this.isMouseOver = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-card {
  position: relative;
}
.cover {
  background-color: #efa053;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;
}
.content-wrapper {
  width: 200px;
  height: 100px;
  margin: auto;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
