<template>
  <div class="About-me">
    <div class="flex-item">
      <h2>{{ "about me".toUpperCase() }}</h2>
      <div class="divider"></div>
      <p>
        {{ text }}
      </p>
      <v-card
        class="bonoimg"
        elevation="11"
        rounded="circle"
        width="100"
        style="display: inline-block;"
      >
        <v-avatar size="100">
          <img :src="iuImg" alt="iu" />
        </v-avatar>
      </v-card>
      <div class="button">
        <v-btn color="gray" min-height="50" outlined
          >VUETIFY DOCUMENTATION</v-btn
        >
      </div>
    </div>
  </div>

  <!-- <div class="About-me">
    <div class="flex-item">
      <div class="flex-item big-font">ABOUT ME</div>
      <div class="border-box"></div>
      <div class="flex-item" max-width="200">
        Vuetify is the #1 component library for Vue.js and has been in active<br />
        development since 2016. The goal of the project is to provide users
        with<br />
        everything that is needed to build rich and engaging web applications
        using the<br />
        Material Design specification. It accomplishes that with a consistent
        update<br />
        cycle, Long-term Support (LTS) for previous versions, responsive
        community<br />
        engagement, a vast ecosystem of resources and a dedication to quality<br />
        components.
      </div>
      <div class="av-bt-box">
        <v-avatar class="avatar" size="130">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="button">
          <v-btn class="ma-2" outlined color="indigo"
            >VUETIFY DOCUMENTATION</v-btn
          >
        </div>
        button
  </div>
      av-bt-box
  </div> -->
  <!--flex-item-->
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutMe",
  components: {},
  data() {
    return {
      iuImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140619_230%2Fdomahwkhxz_1403157555267H7xlG_JPEG%2F%25BA%25B8%25B3%25EB%25BA%25B8%25B3%25EB.jpg&type=sc960_832",
      text:
        "Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community  engagement, a vast ecosystem of resources and a dedication to quality components."
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.About-me {
  // margin-top: 100px;
  // min-height: 422px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 96px;
  text-align: center;
}
.flex-item {
  max-width: 585px;
}
.bonoimg {
  margin-top: 20px;
}
.button {
  margin-top: 50px;
}

// .border-box {
//   width: 60px;
//   height: 6px;
//   border-top: 1px solid #ddd;
//   border-bottom: 1px solid #ddd;
//   margin: 0 auto;
// }
// .text-box {
//   text-align: center;
// }
// .flex-item {
//   font-size: 20px;
//   margin-top: 30px;
//   font-size: normal;
// }
// .big-font {
//   font-weight: 600;
//   font-size: 45px;
// }
// .avatar {
//   margin-top: 30px;
//   box-shadow: 5px 5px 5px #ccc;
// }
// .av-bt-box {
// }
// .button {
//   margin-top: 30px;
//   color: #ccc;
// }
</style>