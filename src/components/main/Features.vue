<template>
  <div class="features">
    <h2>VUETIFY FEATURES</h2>
    <div class="divider"></div>

    <div class="wrapper">
      <feature-item
        v-for="(feature, i) in features"
        :key="i"
        :icon="feature.icon"
        :title="feature.title"
        :text="feature.text"
        class="flex-item"
      ></feature-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "features",
  components: {
    FeatureItem: () => import("@/components/main/featureitem.vue")
  },
  data() {
    return {
      features: [
        {
          icon: "mdi-account",
          title: "VIBRANT COMMUNOTY",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-camera",
          title: "FREQUENT UPDATES",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-cloud",
          title: "LONG-TERM SUPPORT",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.features {
  padding: 20px;
  background-color: #eee;
  padding-bottom: 150px;
}
.wrapper {
  display: flex;
  flex-flow: row; //nowrap;
  justify-content: center;
}
.flex-item {
  width: 300px;
  margin: 0 10px;
}
@media only screen and(max-width:768px) {
  .wrapper {
    flex-flow: column nowrap;
  }
  .flex-item {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
<!--<template>
  <div class="vuetify-features">
    <h2>VUETIFY FEATURES</h2>
    <div class="divider"></div>

    <div class="item-box">
      <div class="flex-item"></div>
      <div class="flex-item"></div>
      <div class="flex-item"></div>
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
.vuetify-features {
  background: #eee;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
}
h2 {
  margin-top: 100px;
}
</style>-->