<template>
  <div class="main-banner">
    <v-img src="../../assets/banners/banners.jpg" min-height="422" alt />
    <div class="text-box">
      <div class="flex-item">WELCOME TO</div>
      <div class="flex-item big-font">VUETIFY</div>
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Mainbanner",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main-banner {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.text-box {
  position: absolute;
}
.flex-item {
  font-size: 50px;
  color: white;
  text-align: center;
}
.big-font {
  font-weight: 900;
  font-size: 90px;
}
</style>
