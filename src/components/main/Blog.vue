<template>
  <div class="blog-view">
    <h2>{{ "Blog".toUpperCase() }}</h2>
    <div class="divider"></div>
    <v-row justify="center">
      <v-col cols="12" sm="3" md="4" v-for="(blog, i) in blogs" :key="i"
        ><blog-item
          :title="blog.title"
          :imgUrl="blog.url"
          :text="blog.text"
          class="blog-item"
        ></blog-item
      ></v-col>
    </v-row>
    <v-btn @click="addblogItem">addBlog</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Blog",
  components: { BlogItem: () => import("@/components/main/Blogitem.vue") },
  data() {
    return {};
  },
  computed: { ...mapState(["blogs"]) },
  methods: {
    addblogItem() {
      //click
      this.$store.commit("addBlog", {
        title: "shiba",
        url:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120605_100%2Fwlsudfjqm1_1338899021027DEBJM_JPEG%2F2012-06-05_21%253B20%253B35.jpg&type=sc960_832",
        text: "shiba입니다."
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-view {
  padding: 20px;
}
.wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.blog-item {
  margin: 0 10px;
}
</style>

<!--<template>
  <div class="blog-view">
    <h2>{{ "Blog".toUpperCase() }}</h2>
    <div class="divider"></div>

    <v-row justify="center">
      <v-col cols="12" sm="3" lg="4" v-for="(blog, i) in blogs" :key="i">
        <blog-item
          :imgUrl="blog.url"
          :title="blog.title"
          :text="blog.text"
          class="blog-item"
        ></blog-item>
      </v-col>
    </v-row>
  </div>
</template>-->


<!--<template>
  <div class="blog-view">
    <h2>{{ "Blog".toUpperCase() }}</h2>
    <div class="divider"></div>

    <div class="wrapper">
      <blog-item
        v-for="(blog, i) in blogs"
        :key="i"
        :imgUrl="blog.url"
        :title="blog.title"
        :text="blog.text"
        class="blog-item"
      ></blog-item>
    </div>
  </div>
</template>-->

<!--<script>
// @ is an alias to /src

export default {
  name: "Blog",
  components: { BlogItem: () => import("@/components/main/Blogitem.vue") },
  data() {
    return {
      blogs: [
        {
          url:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot",
          title: "MOBILE FIRST & RESPONSIVE",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        },
        {
          url:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot",
          title: "THINK OUTSIDE THE BOX",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          url:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1892&amp;q=80&quot",
          title: "MOBILE FIRST & RESPONSIVE",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.blog-view {
  padding: 20px;
  padding-bottom: 150px;
}
.wrapper {
  display: flex;
  flex-flow: row; //nowrap;
  justify-content: center;
}
.blog-item {
  width: 400px;
  margin: 0 10px;
}
@media only screen and(max-width:1268px) {
  .blog-item {
    width: 300px;
  }
}
@media only screen and(max-width:768px) {
  .wrapper {
    flex-flow: column;
  }
  .blog-item {
    width: 100%;
    margin: 10px 0;
  }
}
</style>-->


<!--<template>
  <div class="blog">
    <h2>BLOG</h2>
    <div class="divider"></div>

    <div class="wrapper">
      <blog-item
        v-for="(blogitem, i) in blogitems"
        :key="i"
        :img="blogitem.img"
        :title="blogitem.title"
        :text="blogitem.text"
        :btn="blogitem.btn"
        :class="flex - item"
      ></blog-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Blog",
  components: { BlogItem: () => import("@/components/main/Blogitem.vue") },
  data() {
    return {
      blogitems: [
        {
          img:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot",
          title: "MOBILE FIRST & RESPONSIVE",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
          btn: "CONTINUE READING"
        },
        {
          img:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot",
          title: "THINK OUTSIDE THE BOX",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
          btn: "CONTINUE READING"
        },
        {
          img:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1892&amp;q=80&quot",
          title: "MOBILE FIRST & RESPONSIVE",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
          btn: "CONTINUE READING"
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
  flex-flow: row;
  justify-content: center;
}
</style>-->