<template>
  <div class="feature-item">
    <v-avatar color="#1976d2">
      <v-icon dark>{{ icon }}</v-icon>
    </v-avatar>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FeatureItem",
  props: ["icon", "title", "text"],
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.feature-item {
  padding: 20px;
  text-align: center;
  background-color: white;
}
h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
</style>
