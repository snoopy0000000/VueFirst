<template>
  <div class="gallery">
    <v-row no-gutters>
      <v-col cols="4" v-for="(image, i) in images" :key="i">
        <image-card
          :url="image.download_url"
          :author="image.author"
        ></image-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Gallery",
  components: { ImageCard: () => import("@/components/gallery/imageCard.vue") },
  data() {
    return {};
  },
  computed: {
    ...mapState(["images"])
  },
  methods: {},
  beforeMount() {
    this.$http.get("https://picsum.photos/v2/list").then(images => {
      let parsedImage = images.data.map(el => {
        let tmpArr = el.download_url.split("/");
        tmpArr.splice(-2, 2, "300/200.webp");
        el.download_url = tmpArr.join("/");
        return el;
      });
      this.$store.commit("setImages", parsedImage);
    });
  }
};
</script>

<style lang="scss" scoped>
.gallery {
}
</style>
