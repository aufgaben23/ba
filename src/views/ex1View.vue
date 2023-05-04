<template>
 
  <div class="ex1">

    <br>
    <Verifier :correctSolution="this.result == 'korrekt'" :ifincomplete="this.result == 'incomplete'"
      v-if="this.submitted" :tip="this.hint()" @close-verifier="this.submitted = false" />

    <Header :task_number="'1'" :task_name="'Aufgabe 1'" :is_ex1="true" :is_ex2="false" :is_ex3="false" :lines=this.lines />
    <!-- <h1 id = "mymydiv" :style="'--borderColor:' + bordercolorarr[0]+ ';'"> hello </h1> -->
    <br>
    <div class="flex-container">

      <button class="btn_difficulty" @click="seteasy()">
        <!-- <img src="../assets/star.png" /> -->
        <div class="info title"> </div>
      </button>

      <button class="btn_difficulty2" @click="sethard()">
        <!-- <img src="../assets/star.png" /> -->
        <div class="info title"> </div>
      </button>

    </div>
    <p id="warning" v-show="number == 0">
    <h2 class="title"> Wähle Schwierigkeitsgrad </h2>
    </p>
    <!-- 
      <button class="btn_difficulty">
         <img src="../assets/stars.png" />
      <div class= "info title">  Hard </div>
      </button> -->

    <p id="the_task" v-show="number != 0">
    <h1 class="description"> Finde das Produkt von {{ number }} und {{ secondnumber }} </h1>
    </p>

    <div class="list">
      <template class="layout" v-for="(n, i) in test1" v-bind:key="n">
        <div class="flex-container1">
          <h1 v-if="n != number && n != (number + 1)" :id="'plus' + i" class="flex-childgreen"> + </h1>

          <input class="flex-child magenta" :style="'--borderColor:' + bordercolorarr[i] + ';'" type="number" ref="inputs"
            :id="'str' + i" v-model="inputValues[i]" />
        </div>

      </template>
    </div>


    <div class="secondlist">
      <template class="layout" v-for="(n, i) in test" v-bind:key="n">
        <output class="outputs" :id="'out' + i"> {{ secondnumber }} </output>
      </template>
    </div>

    <br> <br>
    <Footer @next_task="reloadPage()" @check_answer="submitAnswer()" @reset="reset()" @info="info()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Verifier from "../components/Verifier.vue"

// @ts-ignore 
import LeaderLine from "leader-line-vue";
import { resolveModuleName } from 'typescript';


export default defineComponent({
  name: 'ex1',
  components: {
    Header,
    Footer,
    Verifier
  },
  data() {
    return {
      submitted: false,
      inputValues: [],
      result: 'still false',
      number: 0,
      secondnumber: 0,
      test: 0,
      test1: 0,
      lines: [],
      difficulty: '',
      bordercolorarr: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr: [true, true, true, true, true, true, true, true, true, true, true, true]
    }
  }
  ,
  created() {
    window.onpopstate = (event) => {

      console.log(this.lines);
      for (var i = 0; i < this.lines.length; i++) {
        this.lines[i].remove();
      }
      this.lines = [];

    };
  },
  methods: {

    hint() { },
    seteasy() {
      this.difficulty = 'easy';
      this.reloadPage();

    },
    sethard() {
      this.difficulty = 'hard'
      this.reloadPage();


    },
    getrandomnumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    submitAnswer() {
      this.submitted = true;
      this.checkAnswer();
    },

    reloadPage() {

      if (this.difficulty == 'easy') {
        //you need to change bordercolor arrs if you change this.number from 4,12
        this.secondnumber = this.getrandomnumber(1, 20);

        this.number = this.getrandomnumber(4, 12);

      }
      else if (this.difficulty == 'hard') {
        this.secondnumber = this.getrandomnumber(20, 100);

        this.number = this.getrandomnumber(4, 12);

      }
      else { return; }




      for (var i = 0; i < this.lines.length; i++) {
        this.lines[i].remove();

      }

      this.lines = [];
      this.test1 = this.number - 1;
      this.test = this.number;

      this.$nextTick(function () {
        var hi = 0;

        for (let i = 0; i < this.test1 - 1; i++) {
          var line = LeaderLine.setLine(
            // @ts-ignore 
            LeaderLine.obj.pointAnchor(document.getElementById('str' + i), { color: 'red', path: "arc", x: "100%", y: '0' }),
            // @ts-ignore 

            LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1)), { color: 'red', path: "arc", x: "-40%", y: '0' })
          );
          this.lines.push(line);


        }
        //     //make arrows between output and inputs too
        for (let i = 0; i < 2; i++) {
          var line = LeaderLine.setLine(
            // @ts-ignore 
            LeaderLine.obj.pointAnchor(document.getElementById('out' + i), { x: "50 %", y: '0%' }),
            // @ts-ignore 

            LeaderLine.obj.pointAnchor(document.getElementById('plus' + 0), { color: 'red', path: "arc", x: "50 %", y: '100%' })
          );
          this.lines.push(line);
        }
        for (let i = 2; i < this.test; i++) {
          var line = LeaderLine.setLine(
            // @ts-ignore 
            LeaderLine.obj.pointAnchor(document.getElementById('out' + i), { x: "50 %", y: '0%' }),
            // @ts-ignore 

            LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i - 1)), { color: 'red', path: "arc", x: "50 %", y: '100%' })
          );
          this.lines.push(line);
        }

      });

      //this.$refs["inputs"].value = "";
      this.inputValues = [];
    },

    checkAnswer() {

      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black'; console.log('black');
      }

      this.result = "still false";
      var first = this.number - 1;
      var second = this.secondnumber;
      var inputs = this.inputValues;

      console.log('inputs ' + this.inputValues);
      console.log('first and second are ' + first + 'sec' + second);
      for (let i = 0; i < first; i++) {

        if (inputs[i] == null || inputs[i] == '') {
          console.log('this wasnt executed at all ?');
          this.result = "incomplete";
          break;
        }
        else if (inputs[i] != second * (i + 2)) {
          this.result = "false";


          this.borderboolarr[i] = false;
          console.log('is false ');
          // break;
        }
        else if (inputs[i] == second * (i + 2)) {

          this.borderboolarr[i] = true;
        }
        //else if()


        // else {this.result = "korrekt";
        //       console.log('is true ');};

      }
      //for(let j = 0; j<)
      for (var j = 0; j < this.borderboolarr.length; j++) {
        if (!this.borderboolarr[j]) {
          this.bordercolorarr[j] = 'red';
          console.log('red ?')
        }
        else { this.bordercolorarr[j] = 'black'; console.log('black'); }
      }
      console.log('is incomplete!!' + this.result);
      if (this.result == "still false") {

        this.result = "korrekt";
        console.log('is true');
      }

      //   if(this.ans_wetter[0].trim() === "hii")
      //  {
      //   this.result = "korrekt";
      //  }
      //  else this.result = "false";
    },
    reset() {
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black'; console.log('black');
      }

      this.inputValues = [];
      //this.$refs["inputs"].value = "";

    },
    info() {
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black'; console.log('black');
      }

      var firstn = this.number;
      var secondn = this.secondnumber;
      var init = secondn;
      console.log('this is help');
      for (var i = 0; i < firstn; i++) {
        init += secondn;
        this.inputValues[i] = init;
      }

    }
  }
});


</script> 


<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

#mymydiv {
  height: 200px;
  width: 200px;
  border: 2px solid var(--borderColor);
}

.description {

  color: #E6DCF0;
  font-family: cursive;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  margin-top: 10px;

}

.title {
  color: #e8e2ed;
  font-family: cursive;
  margin-top: 10px;
  size: 1.5em;
  text-shadow: -1px -1px 0 #3e3434, 1px -1px 0 #3e3434, -1px 1px 0 #3e3434, 1px 1px 0 #3e3434;

}

#the_task {
  display: flex;
  align-items: center;
  justify-content: center;
}

#warning {
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondlist {

  margin: 100px;
  text-align: center;
}

.outputs {
  background-color: #F1935C;
  border: 2px solid black;
  padding: 15px;
  margin: 40px;
  border-radius: 0.15rem;
  font-size: 17px;
}

.list {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-align: center;
  gap: 50p;
  margin: 40px 40px;
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
#str13,
#str14,
#str15,
#str16,
#str17,
#str18,
#str19,
#str20,
#str20 {
  border: 2px solid var(--borderColor);
  width: 50px;
  height: 50px;
  margin: 70px;
  margin-left: 5px;
  font-size: 17px;

  text-align: center;
}

.layout {
  gap: 50px;
}

.grow1 {
  flex-grow: 1;
}


.flex-container1 {

  align-items: center;
  text-align: center;
  display: flex;
}

.flex-child:first-child {

  align-items: center;
  text-align: center;
  margin-right: 20px;
}

.flex-childgreen {
  color: #E6DCF0;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

}

.flex-container {

  align-items: center;
  text-align: center;
  display: flex;

  justify-content: center;
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


</style> 
