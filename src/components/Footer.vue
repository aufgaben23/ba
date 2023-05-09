<template>
  <div id="buttons">
    <button class="button" id="next_task" @click="next_task()">
      <img src="../assets/new_task.png" />
      <br> <span class="button_text">Neue Aufgabe</span>
    </button>


    <button class="button" id="check" @click="check_answer()">
      <img src="../assets/check.png" />
      <br> <span class="button_text"> Antwort prüfen </span>
    </button>

    <button class="button" id="restart" @click="reset()">
      <img src="../assets/restart.png" />
      <br> <span class="button_text"> Zurücksetzen </span>
    </button>

    <button class="button" id="info" @click="info()">
      <img src="../assets/help.png" />
      <br> <span class="button_text"> Hilfe </span>
    </button>

  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: [

  ],
  methods: {
    reloadPage() {
      location.reload()
    },
    next_task() {
      this.$emit('next_task')
    },
    check_answer() {
      this.$emit('check_answer')
    },
    reset() {
      this.$emit('reset')
    },
    info() {
      this.$emit('info')
    }

  }
});
</script>
  
  
<style scoped>
.button_text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}

#buttons {
  display: flex;
  align-items: center;
  justify-content: center;

}

span {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: normal;
}

img {
  height: 30px;
  width: auto;
}

.button {
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

#main_menu {
  height: 80px;
  width: 150px;
  margin: 5px 13px 0 0;
}

#next_task,
#info,
#check,
#restart {
  height: 80px;
  width: 150px;
  margin: 5px 13px 0 0;
}

router-link {
  text-decoration: none;
  color: black;
}


@media screen and (min-height: 600px) and (max-height: 1000px) {

  #next_task,
  #info,
  #check,
  #restart {
    height: 60px;
    width: 120px;
    margin: 5px 13px 0 0;

  }

  img {
    height: 20px;
    width: auto;
  }

  .button_text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
  }


}</style>