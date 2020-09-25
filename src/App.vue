<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
h2 {
  font-weight: 700;
  font-size: 3rem; //폰트 사이즈 전용 "rem"
  text-align: center;
  margin-top: 100px;
}
p {
  font-weight: 300;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.87);
}
.divider {
  width: 56px;
  height: 5px;
  margin: 0 auto 32px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>