<template>
  <div class="parallax-view">
    <v-parallax
      :height="isMobile ? 800 : 500"
      src="https://www.bloter.net/wp-content/uploads/2019/09/Apple_iPhone-11-Pro_Colors_091019.jpg"
      ><!--true : false-->
      <div class="inner-parallax">
        <div class="container">
          <div v-for="(spac, i) in spacs" :key="i" class="spec">
            <div class="value-text">{{ spac.value }}</div>
            <div class="title-text">{{ spac.title.toUpperCase() }}</div>
          </div>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Parallax.vue",
  data() {
    return {
      spacs: [
        { title: "github stars", value: "24k" },
        { title: "releases", value: "330+" },
        { title: "downloads/mo", value: "1m" },
        { title: "total downloads", value: "5m" }
      ],
      isMobile: false
    };
  },
  mounted() {
    var onresize = () => {
      //your code here
      //this is just an example
      let width = document.body.clientWidth; //(<-보더무시한 컨텐츠만),
      //offsetWidth-마진 무시한 컨텐츠 옆사이즈만, scrollWidth-안에 컨텐츠가 많을 때 스크롤바 생김
      console.log(width);
      if (width < 768) {
        //768 보통 모바일 사이즈
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    };
    window.addEventListener("resize", onresize);
  }
};
</script>

<style scoped lang="scss">
.parallax-view {
}
.inner-parallax {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-flow: row;
  justify-content: center;
  text-align: center;
  .spec {
    margin: 0 20px;
    width: 300px;
  }
  .value-text {
    font-size: 5rem;
    font-weight: bold;
  }
  .title-text {
    font-size: 2rem;
  }
}
@media only screen and(max-width: 768px) {
  .parallax-view {
  }
  .container {
    flex-flow: column;
    align-items: center;
  }
  .inner-parallax {
  }
}
</style>


<!--<template>
  <div class="parallax">
    <v-parallax
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    >
      <div class="wrapper">
        <parallax-item
          v-for="(data, i) in datas"
          :key="i"
          :title="data.title"
          :text="data.text"
          class="flex-item"
        ></parallax-item>
      </div>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "parallax",
  components: {
    ParallaxItem: () => import("@/components/main/Parallaxitem.vue")
  },
  data() {
    return {
      datas: [
        {
          title: "24k",
          text: "GITHUB STARS"
        },
        {
          title: "330+",
          text: "RELEASES"
        },
        {
          title: "1m",
          text: "DOWNLOADS/MO"
        },
        {
          title: "5m",
          text: "TOTAL DOWNLOADS"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: row; //nowrap;
  justify-content: center;
}
.flex-item {
  width: 300px;
  margin: 0 10px;
  text-align: center;
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
</style>-->