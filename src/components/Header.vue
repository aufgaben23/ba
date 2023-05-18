<template>
  <h1> {{ task_name }} </h1>
  <div id="buttons">

    <button class="button" :style="{ 'background-color': button_bg[0] }" id="next_task" @click="seteasy()">
      <img src="../assets/easy.png" />
      <br> <span class="button_text"> Leicht </span>
    </button>

    <button class="button" :style="{ 'background-color': button_bg[1] }" id="next_task" @click="setmiddle()">
      <img src="../assets/middle.png" />
      <br> <span class="button_text">Mittel</span>
    </button>

    <button class="button" :style="{ 'background-color': button_bg[2] }" id="next_task" @click="sethard()">
      <img src="../assets/hard.png" />
      <br> <span class="button_text">Schwer</span>
    </button>

    <router-link v-if="is_ex1" to="/ex2">
      <button @click=deletelines() v-if="is_ex1" class="button" id="next_task">
        <img class="next_img" src="../assets/next.png" />
        <br> <span class="button_text"> Zur Aufgabe 2 </span>
      </button>
    </router-link>

    <router-link v-else-if="is_ex2" to="/ex3">
      <button @click=deletelines() v-if="is_ex2" class="button" id="next_task">
        <img class="next_img" src="../assets/next.png" />
        <br> <span class="button_text"> Zur Aufgabe 3 </span>
      </button>
    </router-link>


    <router-link to="/" style="text-decoration: none; color: black">
      <button @click=deletelines() class="button" id="main_menu">

        <img id="main_menu_img" src="../assets/home.png" />
        <br> <span class="button_text"> Hauptmenü </span>

      </button>
    </router-link>
  </div>
</template>
  
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  emits: ["seteasy", "setmiddle","sethard"],
  props: [
    'task_number',
    'task_name',
    'is_ex1',
    'is_ex2',
    "is_ex3",
    "lines"

  ], data() {
    return { button_bg: ['#e6dcf0', '#e6dcf0', '#e6dcf0'] }
  },

  methods: {
    seteasy() {
      this.button_bg[0] = '#abd6ba';
      this.button_bg[1] = '#e6dcf0';
      this.button_bg[2] = '#e6dcf0';
      this.$emit('seteasy');
    },
    setmiddle() {
      this.button_bg[0] = '#e6dcf0';
      this.button_bg[1] = '#abd6ba';
      this.button_bg[2] = '#e6dcf0';
      this.$emit('setmiddle');
    },
    sethard() {
      this.button_bg[0] = '#e6dcf0';
      this.button_bg[1] = '#e6dcf0';
      this.button_bg[2] = '#abd6ba';
      this.$emit('sethard');
    },

    deletelines() {
      for (var i = 0; i < this.lines.length; i++) {
        this.lines[i].remove();
      }

      this.lines = [];
      console.log('hi')
    },

    reloadPage() {
      location.reload()
    },
    getImage() {
      var pic = this.picture
      console.log(`../assets/${this.picture}.png`)
      return require(`../assets/${this.picture}.png`)
    },
  }
});
</script>
  
<style scoped>
.button_text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E6DCF0;

  font-size: 2.5em;
  font-family: cursive;
  font-weight: bold;
}

#buttons {
  display: flex;
  align-items: center;
  justify-content: center;

}

span {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  font-weight: normal;
}

img {
  height: 30px;
  width: auto;
}

.button {
  margin: 5px 13px 0 0;
  cursor: pointer;
  min-height: 60px;
  min-width: 60px;
  background-color: #B799E1;
  border-radius: 10px;
  border: solid black;
  border-width: thin;
}

#picture {
  width: 50%;
  height: auto
}

.button:hover {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 90%);
}

#main_menu,
#next_task {
  height: 80px;
  width: 150px;
}

router-link {
  text-decoration: none;
  color: black;
}



@media screen and (min-height: 600px) and (max-height: 1000px) {
  .button {
    margin: 5px 13px 0 0;
    cursor: pointer;
    background-color: #B799E1;
    border-radius: 10px;
    border: solid black;
    border-width: thin;
  }

  img {
    height: 20px;
    width: auto;
  }

  .button_text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    margin-bottom: 50px;

  }

  #main_menu,
  #next_task {
    height: 60px;
    width: 120px;

    padding-bottom: 10px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E6DCF0;

    font-size: 2em;
    font-family: cursive;
    font-weight: bold;
  }

}</style>