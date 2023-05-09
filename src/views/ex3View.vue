<template>
  <br>
  <div class="ex3">

    <Verifier :correctSolution="this.result == 'correct'" :ifincomplete="this.result == 'incomplete'"
      v-if="this.submitted" :tip="this.hint()" @close-verifier="this.submitted = false" />

    <Header @seteasy="seteasy()" @sethard="sethard()" :task_number="'3'" :task_name="'Aufgabe 3'" :is_ex1="false"
      :is_ex2="false" :is_ex3="true" />
    <br>

    <p id="warning" v-show="number == 0">
    <h2 class="title"> Wähle Schwierigkeitsgrad </h2>
    </p>
    <br>

    <p id="the_task" v-show="number != 0">
    <h1 class="description"> Finde das Produkt von {{ number }} und {{ secondnumber }} </h1>
    </p>

    <br>
    <div class="list">
      <template class="layout" v-for="(n, i) in number_arr.length + 1" v-bind:key="n">
        <div class="flex-container">

          <h1 v-if="n == 1" v-show="number != 0" class="flex-childgreen"> {{ number }} * {{ secondnumber }} = {{ number }}
            * (
          </h1>

          <input class="flex-child magenta" v-show="number != 0" type="number"
            :style="'--borderColor:' + bordercolorarr[i] + ';'" ref="inputs" :id="'str' + i" v-model="inputValues[i]" />
          <h1 v-if="n != number_arr.length && n != (number_arr.length + 1)" class="flex-childgreen"> + </h1>

          <h1 v-if="n == number_arr.length" class="flex-childgreen"> ) = <span> </span> </h1>
        </div>

      </template>

    </div>
    <span v-if="!smallscreen">
      <br>
      <br>
    </span>

    <br>


    <div class="table" v-for="(n, i) in finalarr.length" v-bind:key="n">
      <div class="container">
        <h1 v-show="number != 0" class="containerchild"> {{ number }} * {{ finalarr[i] }} = &nbsp; </h1>

        <input class="containersecondchild" v-show="number != 0" type="number"
          :style="'--borderColor:' + bordercolorarrtable[i] + ';'" ref="inputs" :id="'table' + i"
          v-model="tableValues[i]" />


      </div>


    </div>
    <br><br>
    <br>
    <br>


    <Footer @next_task="reloadPage()" @check_answer="submitAnswer()" @reset="reset()" @info="info()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Verifier from "../components/Verifier.vue"


export default defineComponent({
  name: 'ex3',
  components: {
    Header,
    Footer,
    Verifier
  },
  data() {
    return {
      submitted: false,
      inputValues: [],
      tableValues: [],
      answer: 0,
      number: 0,
      secondnumber: 0,
      number_arr: [],
      result: "still false",
      oneto16: [1, 2, 4, 8, 16],
      oneto64: [1, 2, 4, 8, 16, 32, 64],
      bordercolorarr: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr: [true, true, true, true, true, true, true, true, true, true, true, true],
      bordercolorarrtable: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarrtable: [true, true, true, true, true, true, true, true, true, true, true, true],
      finalarr: [],
      difficulty: '',
      smallscreen: false
    }
  },
  methods: {

    hint() { },
    seteasy() {
      // if the dificulty is easy, since the largest number is 31, multiplication table only with the numbers up to 16 is needed
      this.difficulty = 'easy';
      this.finalarr = this.oneto16;
      this.reloadPage();

    },
    sethard() {
      this.difficulty = 'hard'
      this.finalarr = this.oneto64;
      this.reloadPage();


    },
    getrandomnumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    //takes a decimal number and returns its binary representation
    dec2bin(dec) {
      return (dec >>> 0).toString(2);
    },
    //takes the binary string and returns an array of powers of 2 corresponding to the 1s.
    getarrayofnumbers(string_onesandzeros) {
      var arr_onesandzeros = string_onesandzeros.split('');

      var number_arr = [];
      var exp;
      for (var i = 0; i < arr_onesandzeros.length; i++) {
        if (arr_onesandzeros[i] == 1) {
          exp = arr_onesandzeros.length - i - 1;
          // @ts-ignore 
          number_arr.push(Math.pow(2, exp));
        }

      }
      return number_arr;
    },
    submitAnswer() {
      this.submitted = true;
      this.checkAnswer();
    },
    reloadPage() {


      if (this.difficulty == 'easy') {
        this.secondnumber = this.getrandomnumber(2, 31);

        this.number = this.getrandomnumber(2, 20);

      }
      else if (this.difficulty == 'hard') {
        this.secondnumber = this.getrandomnumber(20, 127);

        this.number = this.getrandomnumber(20, 100);

      }
      else { return; }

      const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      if (height >= 600 && height <= 1000) { this.smallscreen = true; }

      this.tableValues = [];
      this.inputValues = [];

      this.number_arr = this.getarrayofnumbers(this.dec2bin(this.secondnumber));


    },
    checkAnswer() {

      this.result = 'still false';

      //resets borders to black
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black';
      }

      for (var j = 0; j < this.borderboolarrtable.length; j++) {
        this.bordercolorarrtable[j] = 'black';
      }


      for (var i = 0; i < this.number_arr.length; i++) {
        if (this.inputValues[i] == null || this.inputValues[i] == '') {
          this.result = "incomplete";
          return;
        }

        if (this.inputValues[i] != this.number_arr[i]) {
          this.result = "false";
          this.borderboolarr[i] = false;
          //break;
        }
        else { this.borderboolarr[i] = true; }
      }
      //if any of the inputs (with exception of the multiplication table) is not filled, return "incomplete"
      if (this.inputValues[this.number_arr.length] == null || this.inputValues[i] == '') {
        this.result = "incomplete";
        return;
      }
      // check if the final result is correct as well
      if (this.inputValues[this.number_arr.length] != this.number * this.secondnumber) {

        this.borderboolarr[this.number_arr.length] = false;

        this.result = "false";


      }
      //in case it wasnt detected as incorrect/incomplete, the answer must be correct
      else { this.borderboolarr[this.number_arr.length] = true; }

      //dont require all of the table to be completed, it it just a supplement
      for (var i = 0; i < this.tableValues.length; i++) {

        if (this.tableValues[i] != this.oneto64[i] * this.number) {
          this.result = "false";
          this.borderboolarrtable[i] = false;
        }
        else { this.borderboolarrtable[i] = true; }
      }
      //if any of the input values was incorrect, draw red border around it
      for (var j = 0; j < this.inputValues.length; j++) {
        if (!this.borderboolarr[j]) {
          this.bordercolorarr[j] = 'red';

        }
        else { this.bordercolorarr[j] = 'black'; }
      }
      //if any of the input values in the table was incorrect, draw red border around it
      for (var j = 0; j < this.borderboolarrtable.length; j++) {
        if (!this.borderboolarrtable[j]) {
          this.bordercolorarrtable[j] = 'red';

        }
        else { this.bordercolorarrtable[j] = 'black'; }
      }
      if (this.result == "still false") {
        this.result = "correct";
      }

    }
    ,
    reset() {
      //resets borders and inputs
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black';
      }

      for (var j = 0; j < this.borderboolarrtable.length; j++) {
        this.bordercolorarrtable[j] = 'black';
      }

      this.inputValues = [];
      this.tableValues = [];
    },
    info() {
      //resets borders and fills in the required inputs 
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black';
      }
      for (var j = 0; j < this.borderboolarrtable.length; j++) {
        this.bordercolorarrtable[j] = 'black';
      }

      this.inputValues = [];
      this.tableValues = [];

      for (var i = 0; i < this.number_arr.length; i++) {

        this.inputValues[i] = this.number_arr[i];

      }

      this.inputValues[this.number_arr.length] = this.number * this.secondnumber;

      for (var j = 0; j < this.oneto64.length; j++) {
        this.tableValues[j] = this.oneto64[j] * this.number;

      }

    }

  }
});

</script>


<style scoped>
.title {
  color: #e8e2ed;
  font-family: cursive;
  font-size: 2em;
  text-shadow: -1px -1px 0 #3e3434, 1px -1px 0 #3e3434, -1px 1px 0 #3e3434, 1px 1px 0 #3e3434;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  margin-top: 26px;

}

.btn_difficulty {

  align-items: center;
  text-align: center;
  background: url('../assets/star.png') center no-repeat;
  background-size: 100% 100%;
  margin: 10px 10px 0 0;
  cursor: pointer;
  min-height: 60px;
  min-width: 60px;
  max-height: 60px;
  max-width: 60px;
  background-color: #e6dcf0;
  border-radius: 15px;
  border: solid black;
  border-width: thin;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  size: 50px;
}

.btn_difficulty2 {

  align-items: center;
  text-align: center;
  background: url('../assets/stars.png') center no-repeat;
  background-size: 100% 100%;
  margin: 10px 10px 0 0;
  cursor: pointer;
  min-height: 60px;
  min-width: 60px;
  max-height: 60px;
  max-width: 60px;
  background-color: #e6dcf0;
  border-radius: 15px;
  border: solid black;
  border-width: thin;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  size: 50px;
}

.flex-container-button {

  align-items: center;
  text-align: center;
  display: flex;

  justify-content: center;
}

.flex-childgreen,
.containerchild {
  color: #E6DCF0;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

}

.list {
  display: flex;

  align-items: center;
  text-align: center;
  gap: 50p;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

}

.flex-child,
.containersecondchild {

  align-items: center;
  text-align: center;
  margin-left: 40px;
}

.flex-container {

  align-items: center;
  text-align: center;
  display: flex;
}

.flex-child:first-child {

  align-items: center;
  text-align: center;
  margin-right: 20px;
}

#str0,
#str1,
#str2,
#str3,
#str3,
#str4,
#str5,
#str6,
#str7,
#str8,
#str9,
#str10,
#str11,
#str12,
#answer {
  border: 2px solid var(--borderColor);
  width: 52px;
  height: 52px;
  margin: 15px;
  text-align: center;
  font-size: 17px;

}

#table0,
#table1,
#table2,
#table3 {
  border: 2px solid var(--borderColor);
  width: 52px;
  height: 52px;
  margin: 15px;
  text-align: center;
  font-size: 17px;
}

#table4,
#table5,
#table6 {
  border: 2px solid var(--borderColor);
  width: 52px;
  height: 52px;
  margin: 15px;
  margin-left: 0px;
  text-align: center;
  font-size: 17px;
}

.container {

  align-items: center;
  text-align: center;
  display: flex;
}

.table {
  display: flex;

  align-items: center;
  text-align: center;
  gap: 50p;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

}

.description {

  color: #E6DCF0;
  font-family: cursive;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

}

@media screen and (min-height: 600px) and (max-height: 1000px) {

  .title {
    color: #e8e2ed;
    font-family: cursive;
    margin-top: 0px;
    font-size: 1.5em;
    text-shadow: -1px -1px 0 #3e3434, 1px -1px 0 #3e3434, -1px 1px 0 #3e3434, 1px 1px 0 #3e3434;

  }

  .description {

    color: #E6DCF0;
    font-family: cursive;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    font-size: 1.5em;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  #the_task {
    margin: 0px;
  }

  #str0,
  #str1,
  #str2,
  #str3,
  #str3,
  #str4,
  #str5,
  #str6,
  #str7,
  #str8,
  #str9,
  #str10,
  #str11,
  #str12,
  #answer {
    border: 2px solid var(--borderColor);
    width: 38px;
    height: 38px;
    margin: 15px;
    text-align: center;
    font-size: 17px;

  }

  #table0,
  #table1,
  #table2,
  #table3 {
    border: 2px solid var(--borderColor);
    width: 38px;
    height: 38px;
    margin: 15px;
    text-align: center;
    font-size: 17px;
  }

  #table4,
  #table5,
  #table6 {
    border: 2px solid var(--borderColor);
    width: 38px;
    height: 38px;
    margin: 15px;
    margin-left: 3px;
    text-align: center;
    font-size: 17px;
  }

}

.containersecondchild {

  align-items: center;
  text-align: center;
  margin-left: 40px;
}
</style>