<template>
  <div class="gallery">
    <v-btn v-on:click="show = !show">
      Toggle
    </v-btn>
    <transition name="fade">
      <p v-if="show">fade hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show">Slide hello</p>
    </transition>
    <transition name="bounce">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>
    <div id="list-demo">
      <v-btn @click="add">Add</v-btn>
      <v-btn v-on:click="remove">Remove</v-btn>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <!--shuffle-->
    <v-btn v-on:click="shuffle">Shuffle</v-btn>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
    <!--shuffle end-->
    <transition name="fade" mode="out-in">
      <v-btn
        v-if="isEditing"
        key="save"
        @click="isEditing = !isEditing"
        style="display:block"
        ><!--엘리먼트들-->
        Save
      </v-btn>
      <v-btn v-else key="edit" @click="isEditing = !isEditing">
        Edit
      </v-btn>
    </transition>
    <!-- <transition> 위에꺼랑 똑같은 반응하지만 코드가 밑에가 더 간단하고 많이씀.
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition> -->
    <div>
      <transition name="slide-fade" mode="in-out">
        <v-btn
          v-if="isEditing"
          key="save"
          @click="isEditing = !isEditing"
          class="absol"
          ><!--엘리먼트들-->
          Save
        </v-btn>
        <v-btn v-else key="edit" @click="isEditing = !isEditing" class="absol">
          Edit
        </v-btn>
      </transition>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Gallery",
  data() {
    return {
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      isEditing: true
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: calc(100vh - 120px);
}
// vh - 스크린 화면에서 100%출력
#list-demo {
  margin-top: 40px;
}

.absol {
  position: absolute;
  margin-left: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; //0.5초
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

// bounce css animation
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(
    30px
  ); //왼쪽 위가 0,0이라 오른쪽, 아래로 갈 수록 숫자가 커짐.
}
.flip-list-move {
  transition: transform 1s;
}
</style>
