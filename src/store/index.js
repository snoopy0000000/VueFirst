import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [{
        title: "MOBILE FIRST & RESPONSIVE",
        url: "https://www.rover.com/blog/wp-content/uploads/2019/11/shiba-dreamstime.jpg",
        text: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
      },
      {
        title: "THINK OUTSIDE THE BOX",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkVOjxPjfoxyqpPUD1Suq3jm5FxuzP0ZOsWQ&usqp=CAU",
        text: "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
      },
      {
        title: "SMALL CHANGES, BIG DIFFERENCE",
        url: "https://thehappypuppysite.com/wp-content/uploads/2018/06/Shiba-Inu-Wonderful-Watchdog-or-Family-Pet_-HP-long.jpg",
        text: "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
      }
    ],
    files: [{
      title: 'firstFile',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141128_280%2Fmd_333_1417138987361dv0Uz_JPEG%2Fwww_google_co_kr_20141128_104201.jpg&type=sc960_832',
      subtitle: 'this file is good file'
    }]
  },
  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload)
    },
    addFile(state, payload) {
      state.files.push(payload)
    }
    // addVuex(state, payload) {
    //   state.blogs.push(payload)
    // }
  },
  actions: {},
  modules: {}
});