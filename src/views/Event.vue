<template>
  <div class="Event">
    <h1>Event page : {{pageH1}}</h1>
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는{{ counter }} 번 입니다.</p>
    <button @click="greet">Greet</button>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click.ctrl="say('what')">Say waht</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Event",
  props: ["pageH1"],
  components: {},
  data() {
    return { counter: 0, name: "Vue.js" };
  },
  computed: {},
  methods: {
    greet: function(event) {
      //메소드 안에서 사용하는 'this' 는 Vue 인스턴스를 가리킵니다.
      alert("Hello" + this.name + "!");
      //'event' 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName);
        event.stopPropagation(); //이벤트 상위엘리 먼트 전달 중지
        event.preventDefault(); //새로고침 막기
      }
    },
    say: message => {
      alert(message);
    }
  }
};
</script>

<style lang="scss" scoped>
.Event {
}
</style>