<template>
  <div class="ex1">

    <br>
    <Verifier :correctSolution="this.result == 'korrekt'" :ifincomplete="this.result == 'incomplete'"
      v-if="this.submitted" :tip="this.hint()" @close-verifier="this.submitted = false" />

    <Header @seteasy="seteasy()" @sethard="sethard()" :task_number="'1'" :task_name="'Aufgabe 4'" :is_ex1="false"
      :is_ex2="false" :is_ex3="false" :is_ex4="true" :is_ex5="false" :is_ex6="false" :lines=this.lines />

    <br>

    <p id="warning" v-show="number == 0">
    <h2 class="title"> Wähle Schwierigkeitsgrad </h2>
    </p>


    <p id="the_task" v-show="number != 0">
    <h1 class="description"> Finde {{ secondnumber }}&thinsp;<sup>{{ number }}</sup>  </h1>
    </p>

    <div class="list">
      <template class="layout" v-for="(n, i) in test1" v-bind:key="n">
        <div class="flex-container1">
          <h1 v-if="n != number && n != (number + 1)" :id="'plus' + i" class="flex-childgreen"> * </h1>

          <input class="flex-child2" :style="'--borderColor:' + bordercolorarr[i] + ';'" type="number" ref="inputs"
            :id="'str' + i" v-model="inputValues[i]" />
        </div>

      </template>
    </div>


    <div class="secondlist">
      <template class="layout" v-for="(n, i) in test" v-bind:key="n">
        <div class="outputs" :id="'out' + i"> {{ secondnumber }} </div>
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
      borderboolarr: [true, true, true, true, true, true, true, true, true, true, true, true],
      button_bg: ['#e6dcf0', '#e6dcf0']
    }
  }
  ,
  // detects the event of back arrow being pressed in browser and removes the lines if any exist
  created() {
    
    window.onpopstate = (event) => {

      for (var i = 0; i < this.lines.length; i++) {
        this.lines[i].remove();
      }
      this.lines = [];

    };
  },
  methods: {

    hint() { },
    // sets difficulty level to easy and changes the background color of the selected button
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
      //the two numbers to be multiplied are randomly generated in a range based on the selected difficulty
      if (this.difficulty == 'easy') {
        //  bordercolor arrs needs to change too if this.number is changed from 4,12 
        this.secondnumber = this.getrandomnumber(2, 6);

        if(this.secondnumber == 2) {
          this.number = this.getrandomnumber(3, 9);
        }
        else if( this.secondnumber == 3) {
          this.number = this.getrandomnumber(3, 8);
        }
        else if (this.secondnumber == 4) {
          this.number = this.getrandomnumber(3, 6);
        }
        else if (this.secondnumber == 5) {
          this.number = this.getrandomnumber(3, 5);
        }
        else if (this.secondnumber == 6){
          this.number = this.getrandomnumber(3, 5);
        }
        


      }
      else if (this.difficulty == 'hard') {
        this.secondnumber = this.getrandomnumber(6, 9);

        if(this.secondnumber == 4) {
          this.number = this.getrandomnumber(7, 9);
        }
        else if( this.secondnumber == 5) {
          this.number = this.getrandomnumber(7, 8);
        }
        else if (this.secondnumber == 6) {
          this.number = this.getrandomnumber(6, 7);
        }
        else if (this.secondnumber == 7) {
          this.number = this.getrandomnumber(4, 7);
        }

      }
      
      else { return; }



      // remove any lines from prior runs
      for (var i = 0; i < this.lines.length; i++) {
        this.lines[i].remove();
      }

      this.lines = [];
      this.test1 = this.number - 1;
      this.test = this.number;

      // find the height of the viewport, to better draw the arrows inbetween the elements
      const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


      //draw arrows
      //next tick function allows us to see the updates to the DOM, namely the generated input fields. Then we can draw arrows between them
      this.$nextTick(function () {

        if (height >= 600 && height <= 1000) {

          for (let i = 0; i < this.test1 - 1; i++) {
            //draw arrows between each of the inputs
            var line = LeaderLine.setLine(
              // @ts-ignore 
              LeaderLine.obj.pointAnchor(document.getElementById('str' + i), { color: 'red', path: "arc", x: "130%", y: '0' }),
              // @ts-ignore 
              LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1)), { color: 'red', path: "arc", x: "-50%", y: '40%' })
            );  
            // @ts-ignore
            line.path = "straight";
            this.lines.push(line);


          }
            //draw arrows between output and inputs too
          for (let i = 0; i < 2; i++) {
            var line = LeaderLine.setLine(
              // @ts-ignore 
              LeaderLine.obj.pointAnchor(document.getElementById('out' + i), { x: "50 %", y: '0%' }),
              // @ts-ignore 

              LeaderLine.obj.pointAnchor(document.getElementById('plus' + 0), { color: 'red', path: "arc", x: "50 %", y: '100%' })
            );
            //@ts-ignore
            line.color = '#ff7f50';
            this.lines.push(line);
          }
          for (let i = 2; i < this.test; i++) {
            var line = LeaderLine.setLine(
              // @ts-ignore 
              LeaderLine.obj.pointAnchor(document.getElementById('out' + i), { x: "50 %", y: '0%' }),
              // @ts-ignore 

              LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i - 1)), { color: 'red', path: "arc", x: "50 %", y: '100%' })
            );
            //@ts-ignore
            line.color = '#ff7f50';
            this.lines.push(line);
          }




        }
        else {
          // in case the viewport is bigger
          for (let i = 0; i < this.test1 - 1; i++) {
            var line = LeaderLine.setLine(
              // @ts-ignore 
              LeaderLine.obj.pointAnchor(document.getElementById('str' + i), { color: 'red', path: "arc", x: "100%", y: '0' }),
              // @ts-ignore 

              LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1)), { color: 'red', path: "arc", x: "-50%", y: '40%' })
            );  
            // @ts-ignore
            line.path = "straight";
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
        }


      });


      this.inputValues = [];
    },

    checkAnswer() {

      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black';
      }

      this.result = "still false";
      var first = this.number - 1;
      var second = this.secondnumber;
      var inputs = this.inputValues;

      //the loop goes over each of the inputs, checking if its value is incomplete or incorrect, if by the end of the loop the variable result hasnt changed, it's set to correct
      for (let i = 0; i < first; i++) {
        if (inputs[i] == null || inputs[i] == '') {
          this.result = "incomplete";
          break;
        }
        else if (inputs[i] != Math.pow(second,(i + 2))) {
          this.result = "false";

          this.borderboolarr[i] = false;
          // break;
        }
        else if (inputs[i] == Math.pow(second,(i + 2))) {

          this.borderboolarr[i] = true;
        }

      }

      for (var j = 0; j < this.borderboolarr.length; j++) {
        if (!this.borderboolarr[j]) {
          this.bordercolorarr[j] = 'red';
        }
        else { this.bordercolorarr[j] = 'black'; }
      }
      if (this.result == "still false") {

        this.result = "korrekt";
      }

    },
    reset() {
      // delete any inputs and set the borders back to black
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black';
      }

      this.inputValues = [];

    },
    info() {
      for (var j = 0; j < this.borderboolarr.length; j++) {
        this.bordercolorarr[j] = 'black';
      }

      var firstn = this.number;  //7
      var secondn = this.secondnumber;  //2
      var init = secondn;
      for (var i = 0; i < firstn; i++) {
        init *= secondn;
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

}

.title {
  color: #e8e2ed;
  font-family: cursive;
  margin-top: 10px;
  font-size: 2em;
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
display: flex;
justify-content: center;
  margin: 100px;
  margin-top: 50px;
  margin-left: 0px;
  text-align: center;
}

.outputs {
  background-color: #F1935C;
  border: 2px solid black;
  width: 55px;
  height: 55px;
  margin: 40px;
  margin-right: 60px;  
  margin-left: 90px;
  text-align: center;

  border-radius: 0.15rem;
  font-size: 21px;
  padding-top: 13px;
}
#out0{
  margin-right: 10px;
  margin-left: -200px;
}
#out1{
  margin-right: 82px;
  margin-left: 102px;

}
#out2{
  margin-left: 128px;  

}

.list {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-align: center;
  gap: 50p;
  margin: 40px 40px;
  margin-top: 0px;
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
  width: 80px;
  height: 60px;
  margin: 70px;
  margin-left: 5px;
  font-size: 17px;

  text-align: center;
}



.flex-container1 {

  align-items: center;
  text-align: center;
  display: flex;
}

.flex-child2 {

  align-items: center;
  text-align: center;
  margin-right: 20px;
}

.flex-childgreen {
  color: #E6DCF0;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 2em;
  font-family:'Times New Roman', Times, serif;
  margin-left: 30px;
  margin-bottom:14px;

  margin-right:4px;
}

.flex-container {

  align-items: center;
  text-align: center;
  display: flex;

  justify-content: center;
}


@media screen and (min-height: 600px) and (max-height: 1000px) {

  .secondlist {
display: flex;
justify-content: center;
  margin: 50px;
  margin-right: 0px;
  text-align: center;
}

.outputs {
    background-color: #F1935C;
    border: 2px solid black;
    width: 50px;
    height: 50px;
    padding: 15px;
    margin: 40px;
    margin-bottom: 0px;
    margin-top:10px;
    margin-right: 70px;
    margin-left: 65px;
    border-radius: 0.15rem;
    font-size: 18px;
  }
#out0{
  margin-right: 60px;
  margin-left: -240px;
}
#out1{
  margin-right: 64px;
  margin-left: 44px;

}
#out2{
  margin-left: 70px;  

}

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
    width: 80px;
    height: 50px;
    margin: 70px;
    margin-left: 5px;
    margin-right: 50px;
    font-size: 15px;

    text-align: center;
  }

  




}
</style> 
