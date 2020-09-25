<!--<template>
  <div class="vuex-ex-comp">
    <div v-for="(file, i) in files" :key="i">
      <v-card class="mx-auto" max-width="344">
        <v-list-item-title class="heading mb-1">{{
          file.title
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ file.subtitle }}</v-list-item-subtitle>
        <v-img :src="file.url" height="300"></v-img>
      </v-card>
      <v-btn @click="addFile">AddFile</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["files"]) },
  methods: {
    addFile() {
      //click이벤트
      this.$store.commit("addFile", {
        title: "flying squirrel",
        text: "flying squirrel입니다."
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>-->


<template>
  <div class="vuex-ex-comp">
    <div v-for="(file, i) in files" :key="i">
      <v-card class="mx-auto" max-width="344">
        <v-list-item-title class="heading mb-1">{{
          file.title
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ file.subtitle }}</v-list-item-subtitle>
        <v-img :src="file.url" height="300"></v-img>
      </v-card>
      <v-btn @click="addFile">AddFile</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["files"]) },
  methods: {
    addFile() {
      //click
      this.$store.commit("addVuex", {
        title: "flying squirrel",
        url:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141128_280%2Fmd_333_1417138987361dv0Uz_JPEG%2Fwww_google_co_kr_20141128_104201.jpg&type=sc960_832",
        text: "flying squirrel입니다."
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>