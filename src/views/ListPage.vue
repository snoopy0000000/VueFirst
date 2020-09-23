<template>
  <div class="ListPage">
    <h1>ListPage</h1>
    <ul id="esample-1">
      <li v-for="(item, i) in items" :key="i">{{ item.message }}</li>
    </ul>
    <ul id="esample-2">
      <li v-for="(value, name) in object" :key="name">
        {{ value }} : {{ name }}
      </li>
    </ul>
    <li v-for="(n, i) in evenNumbers" :key="i">{{ n }}</li>
    <span v-for="n in 100" :key="n">{{ n }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ListPage",
  components: {},
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "how to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10"
      },
      numbers: [1, 2, 3, 4, 5, 1]
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.ListPage {
}
</style>
