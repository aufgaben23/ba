<template>
  <div id="tutorial-wrapper" class="modal-mask" @mousedown.stop="showSolution = false; $emit('close-verifier')">
    <div class="modal-wrapper">
      <div class="modal-container" @mousedown.stop>
        <div class="modal-header">
          <p class="title" v-if="correctSolution">Das ist richtig!</p>
          <p class="title" v-if="!correctSolution && !ifincomplete">Das ist leider nicht richtig!</p>
          <p class="title" v-if="ifincomplete"> Gebe in alle Felder eine Zahl ein</p>
          <button class="exit-button" @click="$emit('close-verifier')">
            &times;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Verifier',
  props: [
    'correctSolution',
    'ifincomplete',
    'tip',
  ],
  created: function () {
    console.log("Verifier activated")
  },
  methods: {
    reloadPage() {
      location.reload()
    },

  }
});
</script>
  
  
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}


.exit-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  width: 2em;
  height: 2em;
  text-align: center;
  padding: 0;
  background: #f5f5f5;
  font-size: 1.5em;
  line-height: 1.7em;
  border-radius: 3px;
}

.modal-container {
  position: relative;
  margin: 0px auto;
  width: 40%;
  min-width: 500px;
  ;
  padding: 20px 30px 40px 30px;
  background-color: #E6DCF0;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.25em;
}

.modal-header {
  padding-bottom: 30px;
}

.modal-header h3 {
  font-size: 1.4em;
}
</style>