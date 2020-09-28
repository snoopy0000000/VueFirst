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
    }],
    body: {
      "status": "success",
      "data": [{
          "id": 1,
          "employee_name": "Tiger Nixon",
          "employee_salary": 320800,
          "employee_age": 61,
          "profile_image": ""
        },
        {
          "id": 2,
          "employee_name": "Garrett Winters",
          "employee_salary": 170750,
          "employee_age": 63,
          "profile_image": ""
        },
        {
          "id": 3,
          "employee_name": "Ashton Cox",
          "employee_salary": 86000,
          "employee_age": 66,
          "profile_image": ""
        },
        {
          "id": 4,
          "employee_name": "Cedric Kelly",
          "employee_salary": 433060,
          "employee_age": 22,
          "profile_image": ""
        },
        {
          "id": 5,
          "employee_name": "Airi Satou",
          "employee_salary": 162700,
          "employee_age": 33,
          "profile_image": ""
        },
        {
          "id": 6,
          "employee_name": "Brielle Williamson",
          "employee_salary": 372000,
          "employee_age": 61,
          "profile_image": ""
        },
        {
          "id": 7,
          "employee_name": "Herrod Chandler",
          "employee_salary": 137500,
          "employee_age": 59,
          "profile_image": ""
        },
        {
          "id": 8,
          "employee_name": "Rhona Davidson",
          "employee_salary": 327900,
          "employee_age": 55,
          "profile_image": ""
        },
        {
          "id": 9,
          "employee_name": "Colleen Hurst",
          "employee_salary": 205500,
          "employee_age": 39,
          "profile_image": ""
        },
        {
          "id": 10,
          "employee_name": "Sonya Frost",
          "employee_salary": 103600,
          "employee_age": 23,
          "profile_image": ""
        },
        {
          "id": 11,
          "employee_name": "Jena Gaines",
          "employee_salary": 90560,
          "employee_age": 30,
          "profile_image": ""
        },
        {
          "id": 12,
          "employee_name": "Quinn Flynn",
          "employee_salary": 342000,
          "employee_age": 22,
          "profile_image": ""
        },
        {
          "id": 13,
          "employee_name": "Charde Marshall",
          "employee_salary": 470600,
          "employee_age": 36,
          "profile_image": ""
        },
        {
          "id": 14,
          "employee_name": "Haley Kennedy",
          "employee_salary": 313500,
          "employee_age": 43,
          "profile_image": ""
        },
        {
          "id": 15,
          "employee_name": "Tatyana Fitzpatrick",
          "employee_salary": 385750,
          "employee_age": 19,
          "profile_image": ""
        },
        {
          "id": 16,
          "employee_name": "Michael Silva",
          "employee_salary": 198500,
          "employee_age": 66,
          "profile_image": ""
        },
        {
          "id": 17,
          "employee_name": "Paul Byrd",
          "employee_salary": 725000,
          "employee_age": 64,
          "profile_image": ""
        },
        {
          "id": 18,
          "employee_name": "Gloria Little",
          "employee_salary": 237500,
          "employee_age": 59,
          "profile_image": ""
        },
        {
          "id": 19,
          "employee_name": "Bradley Greer",
          "employee_salary": 132000,
          "employee_age": 41,
          "profile_image": ""
        },
        {
          "id": 20,
          "employee_name": "Dai Rios",
          "employee_salary": 217500,
          "employee_age": 35,
          "profile_image": ""
        },
        {
          "id": 21,
          "employee_name": "Jenette Caldwell",
          "employee_salary": 345000,
          "employee_age": 30,
          "profile_image": ""
        },
        {
          "id": 22,
          "employee_name": "Yuri Berry",
          "employee_salary": 675000,
          "employee_age": 40,
          "profile_image": ""
        },
        {
          "id": 23,
          "employee_name": "Caesar Vance",
          "employee_salary": 106450,
          "employee_age": 21,
          "profile_image": ""
        },
        {
          "id": 24,
          "employee_name": "Doris Wilder",
          "employee_salary": 85600,
          "employee_age": 23,
          "profile_image": ""
        }
      ],
      "message": "Successfully! All records has been fetched."
    }
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