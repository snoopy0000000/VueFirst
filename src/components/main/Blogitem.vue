<template>
  <div class="blog-item">
    <v-img :src="imgUrl" height="300"></v-img>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <v-btn depressed>CONTINUE READING</v-btn>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["imgUrl", "title", "text"],
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.blog-item {
  padding: 20px;
  text-align: center;
}
</style>


<!--<template>
  <div class="blog-item">
    <v-img>{{ img }}</v-img>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <v-btn depressed>{{ btn }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["img", "title", "text", "btn"],
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.blog-item {
  padding: 20px;
  text-align: center;
}
</style>-->