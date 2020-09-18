<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <h1>{{msg}}</h1> -->
    <p v-bind:title="message">
      내 위에 잠시 마우스를 올리면
      <span style="color:red">동적</span>으로 바인딩 된 title을 볼 수 있습니다.
    </p>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <li v-for="(todo, i) in todos" v-bind:key="i">
      {{todo.text}}
      <HelloWorld msg="안녕하세요"></HelloWorld>
    </li>
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>
    <input v-model="message" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: { HelloWorld },
  data() {
    return {
      message: "안녕하세요! vue.js!",
      seen: true,
      todos: [
        { text: "JavaScript 배우기" },
        { text: "Vue 배우기" },
        { text: "무언가 멋진 것을 만들기" }
      ]
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style lang="scss">
.home {
}
</style>