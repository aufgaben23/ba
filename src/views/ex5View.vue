<template>
  <div class="ex2">

    <br>
    <Verifier :correctSolution="this.result == 'correct'" :ifincomplete="this.result == 'incomplete'"
      v-if="this.submitted" :tip="this.hint()" @close-verifier="this.submitted = false" />

    <Header @seteasy="seteasy()"  @sethard="sethard()" :task_number="'2'" :task_name="'Aufgabe 5'" :is_ex1="false"
      :is_ex2="false" :is_ex3="false" :is_ex4="false" :is_ex5="true" :is_ex6="false" :lines=this.lines />

    <br>

    <p id="warning" v-show="number == 0">
    <h2 class="title"> Wähle Schwierigkeitsgrad </h2>
    </p>

    <p id="the_task" v-show="number != 0">
    <h1 class="title"> Finde {{ secondnumber }}&thinsp;<sup>{{ number }}</sup> </h1>

    </p>

    <div class="level5" v-show="levels[5] != null">
      <template class="layout" v-for="(n, i) in levels[5]" v-bind:key="n">
        <div class="flex-container1">
          <input v-if="levelquotient[5] > i && levelquotient[5] > 1" type="number"
            :style="'--borderColor:' + bordercolorarrquo[5] + ';'" ref="inputs" :id="'quo5' + i"
            v-model="quotientValues[5]" />
          <input v-if="i >= levelquotient[5] || levelquotient[5] < 2" type="number"
            :style="'--borderColor:' + bordercolorarr5[i] + ';'" ref="inputs" :id="'str5' + i"
            v-model="inputValues5[i]" />
          <h1 v-if="n != number && n != (number + 1)" :id="'plus5' + i" class="flex-child magenta"> * </h1>
        </div>
      </template>
    </div>

    <div class="level4" v-show="levels[4] != null">
      <template class="layout" v-for="(n, i) in levels[4]" v-bind:key="n">
        <div class="flex-container1">
          <input v-if="levelquotient[4] > i && levelquotient[4] > 1" type="number"
            :style="'--borderColor:' + bordercolorarrquo[4] + ';'" ref="inputs" :id="'quo4' + i"
            v-model="quotientValues[4]" />
          <input v-if="i >= levelquotient[4] || levelquotient[4] < 2" type="number"
            :style="'--borderColor:' + bordercolorarr4[i] + ';'" ref="inputs" :id="'str4' + i"
            v-model="inputValues4[i]" />
          <h1 v-if="n != number && n != (number + 1)" :id="'plus4' + i" class="flex-child magenta"> * </h1>
        </div>
      </template>
    </div>

    <div class="level3" v-show="levels[3] != null">
      <template class="layout" v-for="(n, i) in levels[3]" v-bind:key="n">
        <div class="flex-container1">
          <input v-if="levelquotient[3] > i && levelquotient[3] > 1" type="number"
            :style="'--borderColor:' + bordercolorarrquo[3] + ';'" ref="inputs" :id="'quo3' + i"
            v-model="quotientValues[3]" />
          <input v-if="i >= levelquotient[3] || levelquotient[3] < 2" type="number"
            :style="'--borderColor:' + bordercolorarr3[i] + ';'" ref="inputs" :id="'str3' + i"
            v-model="inputValues3[i]" />
          <h1 v-if="n != number && n != (number + 1)" :id="'plus3' + i" class="flex-child magenta"> * </h1>
        </div>
      </template>
    </div>


    <div class="level2" v-show="levels[2] != null">
      <template class="layout" v-for="(n, i) in levels[2]" v-bind:key="n">
        <div class="flex-container1">
          <input v-if="levelquotient[2] > i && levelquotient[2] > 1" type="number"
            :style="'--borderColor:' + bordercolorarrquo[2] + ';'" ref="inputs" :id="'quo2' + i"
            v-model="quotientValues[2]" />
          <input v-if="i >= levelquotient[2] || levelquotient[2] < 2" type="number"
            :style="'--borderColor:' + bordercolorarr2[i] + ';'" ref="inputs" :id="'str2' + i"
            v-model="inputValues2[i]" />
          <h1 v-if="n != number && n != (number + 1)" :id="'plus2' + i" class="flex-child magenta"> * </h1>

        </div>
      </template>
    </div>


    <div class="level1" v-show="levels[1] != null">
      <template class="layout" v-for="(n, i) in levels[1]" v-bind:key="n">
        <div class="flex-container1">
          <input v-if="levelquotient[1] > i && levelquotient[1] > 1" type="number"
            :style="'--borderColor:' + bordercolorarrquo[1] + ';'" class="flex-childgreen" ref="inputs" :id="'quo1' + i"
            v-model="quotientValues[1]" />
          <input v-if="i >= levelquotient[1] || levelquotient[1] < 2" type="number"
            :style="'--borderColor:' + bordercolorarr1[i] + ';'" class="flex-childgreen" ref="inputs" :id="'str1' + i"
            v-model="inputValues1[i]" />
          <h1 v-if="n != number && n != (number + 1)" :id="'plus1' + i" class="flex-child magenta"> * </h1>
        </div>

      </template>
    </div>



    <div class="outs">
      <template class="layout" v-for="(n, i) in number" v-bind:key="n">
        <output class="outputs" :id="'out' + i"> {{ secondnumber }} </output>
      </template>
    </div>
    <br>

    
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
import { NewLineKind, resolveModuleName } from 'typescript';

export default defineComponent({
  name: 'ex2',
  components: {
    Header,
    Footer,
    Verifier
  },
  data() {
    return {
      submitted: false,
      levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      levelquotient: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      quotientValues: [],
      inputValues1: [],
      inputValues2: [],
      inputValues3: [],
      inputValues4: [],
      inputValues5: [],
      number: 0,
      secondnumber: 0,
      lines: [],
      result: 'still false',
      generated: false,
      difficulty: '',

      bordercolorarr1: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr1: [true, true, true, true, true, true, true, true, true, true, true, true],
      bordercolorarr2: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr2: [true, true, true, true, true, true, true, true, true, true, true, true],
      bordercolorarr3: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr3: [true, true, true, true, true, true, true, true, true, true, true, true],
      bordercolorarr4: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr4: [true, true, true, true, true, true, true, true, true, true, true, true],
      bordercolorarr5: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarr5: [true, true, true, true, true, true, true, true, true, true, true, true],
      bordercolorarrquo: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
      borderboolarrquo: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    }
  },
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
    seteasy() {
      this.difficulty = 'easy';
      this.reloadPage();

    },
    
    sethard() {
      this.difficulty = 'hard'
      this.reloadPage();

    },

    submitAnswer() {
      this.submitted = true;
      this.checkAnswer();
    },
    getrandomnumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    reloadPage() {
      this.levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.levelquotient = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      //for small screen sizes up to 12

      const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      //for smaller viewports restrict the first number up to 12, else the user has to scroll
      if (height >= 600 && height <= 1000) {
        if (this.difficulty == 'easy') {
        //  bordercolor arrs needs to change too if this.number is changed from 4,12 
        this.secondnumber = this.getrandomnumber(2, 6);

        this.number = this.getrandomnumber(4, 7);

      }
      else if (this.difficulty == 'hard') {
        this.secondnumber = this.getrandomnumber(7, 9);

        this.number = this.getrandomnumber(4, 6);

      }
      
      else { return; }


      }
      else {
        //if the screen is big enough

        if (this.difficulty == 'easy') {
        //  bordercolor arrs needs to change too if this.number is changed from 4,12 
        this.secondnumber = this.getrandomnumber(2, 6);

        this.number = this.getrandomnumber(4, 7);

      }
      else if (this.difficulty == 'hard') {
        this.secondnumber = this.getrandomnumber(7, 9);

        this.number = this.getrandomnumber(4, 6);

      }
      
      else { return; }


      }


      if (this.number != 0) {
        this.generated = true;
      }
      var firstn = this.number;
      var secondn = this.secondnumber;
      var mult = firstn * secondn;

      //remove any lines from previous runs
      for (var i = 0; i < this.lines.length; i++) {
        this.lines[i].remove();
      }

      this.lines = [];
      var leftover: number[] = [];

      var smallest = 2 * secondn;
      var nodehanging = false;
      var secondhanging = false;
      //if odd number outputs, on the output height there would be a node left hanging
      if (firstn % 2 != 0) {
        nodehanging = true;
      }
      var changeit = false;

      //reset the borders to black 
      for (var i = 1; i < 5; i++) {
        for (var j = 0; j < this["borderboolarr" + i].length; j++) {
          this["bordercolorarr" + i][j] = 'black';
          this["borderboolarr" + i][j] = 'true';

        }
      }
      // reset the 'quotient' node borders to similar colors
      for (var i = 1; i < 5; i++) {
        if (i = 1) {
          this.borderboolarrquo[i] = 'true';
          this.bordercolorarrquo[i] = 'blue';
        }
        if (i = 2) {
          this.borderboolarrquo[i] = 'true';
          this.bordercolorarrquo[i] = 'green';
        }
        if (i = 3) {
          this.borderboolarrquo[i] = 'true';
          this.bordercolorarrquo[i] = 'yellow';
        }
        if (i = 4) {
          this.borderboolarrquo[i] = 'true';
          this.bordercolorarrquo[i] = 'orange';
        }
        if (i = 5) {
          this.borderboolarrquo[i] = 'true';
          this.bordercolorarrquo[i] = 'purple';
        }
      }
      //go over all heights
      for (var i = 1; i < 10; i++) {
        var quotient = Math.floor(mult / smallest);
        var remainder = mult % smallest;

        // if at last height, the number of nodes is 1
        if (smallest >= mult) {
          this.levels[i] = 1;
          break;
        }

        //add to any previous calculations the quotient number nodes for this height. Levels[i] holds the number of inputs that need to be generated at height i
        this.levels[i] = this.levels[i] + quotient;

        // is used later when drawing arrows to determine the position of the input nodes
        this.levelquotient[i] = quotient;

        // if 2 nodes are hanging at lower heights, join them at this height, this extra node we call a "hang" node
        if (changeit) {
          this.levels[i]++;
        //save the last remainder in the array "leftover", unless that remainder is 0, which is an edge case
          if (remainder != 0) {
            leftover.push(remainder);

          }
          // if anything was stored in the array in the previous step, shift the array so that only the last pushed value remains
          if (leftover.length > 1) {
            leftover.shift();
          }

          changeit = false;
        }
        //check if a node needs to be added because of a change of remainder
        else if (leftover[leftover.length - 1] != remainder) {
          //asssuming remainder doesnt fall to 0 in higher levels while in low is not, this check is correct, else not
          if (remainder != 0) {
            leftover.push(remainder);

          }

          // add extra node at this level if the leftover array holds 2 remainders. this extra node we call a 'change' node, because of the change of remainders
          if (leftover.length > 1) {
            this.levels[i]++;
            leftover.shift();
          }

        }
        
        if (quotient % 2 != 0) {
          if (nodehanging) {
            secondhanging = true;
          }
          else nodehanging = true;
        }

        if (nodehanging && secondhanging) {
          changeit = true;
          nodehanging = false;
          secondhanging = false;
        }



        smallest = smallest * 2;


      }
      // clear any input values from previous runs
      this.inputValues1 = [];
      this.inputValues2 = [];

      this.inputValues3 = [];

      this.inputValues4 = [];

      this.inputValues5 = [];

      this.quotientValues = [];

      
      //draw arrows
      //next tick function allows us to see the updates to the DOM, namely the generated input fields. Then we can draw arrows between them
      // The loop that draws the arrows functions as a modified version of the one generating inputs, but instead draws arrows for each input generated
      this.$nextTick(function () {
        var levels = this.levels;
        var leftnode = [];
        for (let i = 0; i < levels.length - 1; i++) {


          //between output and inputs
          if (i == 0) {

            for (let j = 0; j < levels[i + 1]; j++) {
              var line = LeaderLine.setLine(
                // @ts-ignore 
                LeaderLine.obj.pointAnchor(document.getElementById('out' + 2 * j), { x: "50%", y: '0%' }),
                // @ts-ignore 

                LeaderLine.obj.pointAnchor(document.getElementById('plus1' + '' + j), { color: 'red', x: "50%", y: '90%' })
              );
              var secondline = LeaderLine.setLine(
                // @ts-ignore 
                LeaderLine.obj.pointAnchor(document.getElementById('out' + (2 * j + 1)), { x: "50%", y: '0%' }),
                // @ts-ignore 

                LeaderLine.obj.pointAnchor(document.getElementById('plus1' + '' + j), { color: 'red', x: "50%", y: '90%' })
              );
                // @ts-ignore 
                secondline.path = "straight";
                  // @ts-ignore 
                line.path = "straight";
              this.lines.push(line);
              this.lines.push(secondline);
              //if there's a node hanging
              if (j + 1 == levels[1]) {
                if (2 * j + 3 == firstn) {
                  // @ts-ignore 
                  leftnode.push('out' + (2 * j + 2));

                }
              }
            }

          }


          if (i > 0) {
            // i = 1
            for (let j = 0; j < levels[i + 1]; j++) { 
              
              //those variables indicate if at the above/below level any 'quotient' nodes exist
              var uplevelquo = this.levelquotient[i + 1] > j && this.levelquotient[i + 1] > 1;
              var downlevelquoleft = this.levelquotient[i] > 2 * j && this.levelquotient[i] > 1;
              var downlevelquoright = this.levelquotient[i] > 2 * j + 1 && this.levelquotient[i] > 1;
              if (uplevelquo) {
                
                if (downlevelquoleft) {
                  var line = LeaderLine.setLine(
                    // @ts-ignore 
                    LeaderLine.obj.pointAnchor(document.getElementById('quo' + i + '' + 2 * j), { x: "50%", y: '0%' }),
                    // @ts-ignore 

                    LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "50%", y: '85%', path: "arc" })
                  );
                  // @ts-ignore 
                  line.path = "straight";

                  this.lines.push(line);

                }
                
                else if (!downlevelquoleft) {
                  var line = LeaderLine.setLine(
                    // @ts-ignore 
                    LeaderLine.obj.pointAnchor(document.getElementById('str' + i + '' + 2 * j), { x: "50%", y: '0%' }),
                    // @ts-ignore 

                    LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "0%", y: '-15%', path: "arc" })
                  );

                     // @ts-ignore 
                  line.path = "straight";
                  this.lines.push(line);

                }

              }
              if (!uplevelquo) {
                if (downlevelquoleft) {
                  var line = LeaderLine.setLine(
                    // @ts-ignore 
                    LeaderLine.obj.pointAnchor(document.getElementById('quo' + i + '' + 2 * j), { x: "50%", y: '0 %' }),

                    // @ts-ignore 

                    LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "50%", y: '85%', path: "arc" })
                  );
                  // @ts-ignore 
                  line.path = "straight";
                  this.lines.push(line);


                }
                else if (!downlevelquoleft) {
                  var line = LeaderLine.setLine(
                    // @ts-ignore 
                    LeaderLine.obj.pointAnchor(document.getElementById('str' + i + '' + 2 * j), { x: "50%", y: '0%' }),
                    // @ts-ignore 

                    LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "50%", y: '85%', path: "arc" })
                  );
                  // @ts-ignore 
                  line.path = "straight";
                  this.lines.push(line);

                }
              }

              
              if (j + 1 == levels[i + 1] && leftnode.length > 0 && levels[i] < (2 * j) + 2) {
                // @ts-ignore    
                var secondline = secondline = LeaderLine.setLine(
                  // @ts-ignore 
                  LeaderLine.obj.pointAnchor(document.getElementById(leftnode.pop()), { x: "50%", y: '0%' }),
                  // @ts-ignore 

                  LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "90%", y: '80%', path: "arc" })

                );
                  // @ts-ignore 
                secondline.path = "straight";
                  //green
                this.lines.push(secondline);


              } else {
                

                if (uplevelquo) {
                  
                  if (downlevelquoright) {
                    var secondline = LeaderLine.setLine(
                      // @ts-ignore 
                      LeaderLine.obj.pointAnchor(document.getElementById('quo' + i + '' + (2 * j + 1)), { x: "50%", y: '0%' }),
                      // @ts-ignore 

                      LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "50%", y: '85%', path: "arc" })
                    );
                    // @ts-ignore 
                  secondline.path = "straight";
                    this.lines.push(secondline);


                  }
                  
                  else if (!downlevelquoright) {
                    var secondline = LeaderLine.setLine(
                      // @ts-ignore 
                      LeaderLine.obj.pointAnchor(document.getElementById('str' + i + '' + (2 * j + 1)), { x: "50%", y: '-15%' }),
                      // @ts-ignore 

                      LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "0%", y: '-15%', path: "arc" })
                    );
                    this.lines.push(secondline);
                    // @ts-ignore 

                    secondline.color = "blue";

                  }

                }
                if (!uplevelquo) {
                  if (downlevelquoright) {
                    var secondline = LeaderLine.setLine(
                      // @ts-ignore 
                      LeaderLine.obj.pointAnchor(document.getElementById('quo' + i + '' + (2 * j + 1)), { x: "50%", y: '0%' }),
                      // @ts-ignore 

                      LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "50%", y: '85%', path: "arc" })
                    );
                    // @ts-ignore 
                  secondline.path = "straight";
                    this.lines.push(secondline);



                  }
                  else if (!downlevelquoright) {
                    var secondline = LeaderLine.setLine(
                      // @ts-ignore 
                      LeaderLine.obj.pointAnchor(document.getElementById('str' + i + '' + (2 * j + 1)), { x: "50%", y: '0%' }),
                      // @ts-ignore 

                      LeaderLine.obj.pointAnchor(document.getElementById('plus' + (i + 1) + '' + j), { color: 'red', x: "50%", y: '85%', path: "arc" })
                    );

                    // @ts-ignore 
                  secondline.path = "straight";
                    this.lines.push(secondline);

                  }
                }



                if (j + 1 == levels[i + 1]) {
                  if (2 * j + 3 == levels[i]) {
                    if (this.levelquotient[i] == levels[i]) {
                      // @ts-ignore 
                      leftnode.push('quo' + i + '' + (2 * j + 2));
                    } else {
                      // @ts-ignore 
                      leftnode.push('str' + i + '' + (2 * j + 2));
                    }


                  }
                }
              }
            }




          }
        }
      });



    },
    checkAnswer() {

      //functions similarly to the one generating the inputs, but instead of generating said inputs checks for their value in the appropriate place where that input wouldve been generated.
      //       The result is set to correct if and only if:
      //    For each height i the value of all “quotient” nodes at height i are equal to ((mult - remainder) / quotient)
       //  	the value of all “hang” and “change” nodes at height i are equal to the remainder at height i

        // In case the any of the above points does not hold true, the result is set to “false” and if any input is still unfilled the user is prompted to fill the missing inputs.

      this.$nextTick(function () {

        //reset variables from previous runs
        this.result = 'still false';

        for (var i = 1; i < 5; i++) {
          for (var j = 0; j < this["borderboolarr" + i].length; j++) {
            this["bordercolorarr" + i][j] = 'black';
            this["borderboolarr" + i][j] = 'true';

          }
        }

        for (var i = 1; i < 5; i++) {
          if (i = 1) {
            this.bordercolorarrquo[i] = 'blue';
            this.borderboolarrquo[i] = 'true';

          }
          if (i = 2) {
            this.bordercolorarrquo[i] = 'green';
            this.borderboolarrquo[i] = 'true';

          }
          if (i = 3) {
            this.bordercolorarrquo[i] = 'yellow';
            this.borderboolarrquo[i] = 'true';

          }
          if (i = 4) {
            this.bordercolorarrquo[i] = 'orange';
            this.borderboolarrquo[i] = 'true';

          }
          if (i = 5) {
            this.bordercolorarrquo[i] = 'purple';
            this.borderboolarrquo[i] = 'true';

          }
        }



        var firstn = this.number;
        var secondn = this.secondnumber;
        var mult = firstn * secondn;

        var leftover: number[] = [];
        var multi = secondn;

        var smallest = 2 * secondn;
        var nodehanging = false;
        var secondhanging = false;
        //if odd 
        if (firstn % 2 != 0) {
          nodehanging = true;
          

        }
        var changeit = false;





        //go through the heights
        for (var i = 1; i < 10; i++) {

          var quotient = Math.floor(mult / smallest);

          var remainder = mult % smallest;


          if (smallest >= mult) {
            if (this["inputValues" + i][0] == null || this["inputValues" + i][0] == '') {
              this.result = 'incomplete';
              //return;
            }
          }
          //the top
          if (smallest >= mult) {
            if (this["inputValues" + i][0] != Math.pow(secondn,firstn)) {
              //set i0 to false;
              this["borderboolarr" + i][0] = 'false';
              this.result = 'false';
            }

            break;
          }


          for (var k = 0; k < quotient; k++) {



            if (this.levelquotient[i] > k && this.levelquotient[i] > 1) {


              if (this.quotientValues[i] == null || this.quotientValues[i] == '') {
                this.result = 'incomplete';
                return;
              }

              if (this.quotientValues[i] != Math.pow(secondn,(i)*2)) {            //here
                this.result = 'false';
                this.borderboolarrquo[i] = 'false';
              }

            }
            else {
              if (this["inputValues" + i][k] == null || this["inputValues" + i][k] == '') {
                this.result = 'incomplete';
                return;
              }

              if (this["inputValues" + i][k] != Math.pow(secondn,(i)*2)) {
                this["borderboolarr" + i][k] = 'false';
                this.result = 'false';
              }



            }
          }

          if (changeit) {
            if (this["inputValues" + i][quotient] == null || this["inputValues" + i][quotient] == '') {
              this.result = 'incomplete';
              return;
            }

            if (this["inputValues" + i][quotient] != Math.pow(secondn,(i-1)*2)*multi) {
              this["borderboolarr" + i][quotient] = 'false';
              this.result = 'false';

              //break;
            }

            if (remainder != 0) {
              leftover.push(remainder);

            }
            if (leftover.length > 1) {
              leftover.shift();
            }

            changeit = false;
          }
          else if (leftover[leftover.length - 1] != remainder) {

            //if remainder doesnt fall to 0 in higher levels while in low is not, this check is correct, else not
            if (remainder != 0) {
              leftover.push(remainder);

            }

            if (leftover.length > 1) {

              if (this["inputValues" + i][quotient] == null || this["inputValues" + i][quotient] == '') {
                this.result = 'incomplete';

                return;
              }


              if (this["inputValues" + i][quotient] != Math.pow(secondn,(i)*2 +1)) {
                console.log('is this executed ? ');
                this["borderboolarr" + i][quotient] = 'false';
                this.result = 'false';

                // break;
              }

              leftover.shift();
            }

          }

          if (quotient % 2 != 0) {
            if (nodehanging) {
              secondhanging = true;
            }
            else {nodehanging = true; multi = Math.pow(secondn,(i) *2);}
          }

          if (nodehanging && secondhanging) {
            changeit = true;
            nodehanging = false;
            secondhanging = false;
          }



          smallest = smallest * 2;


        }


        if (this.result == 'still false') {
          this.result = 'correct'
        }

        for (var i = 1; i < 5; i++) {
          for (var j = 0; j < this["borderboolarr" + i].length; j++) {
            if (this["borderboolarr" + i][j] == 'false') {
              this["bordercolorarr" + i][j] = 'red';
            }
            else { this["bordercolorarr" + i][j] = 'black'; }

          }
        }

        for (var i = 1; i < 5; i++) {
          if (i == 1) { if (this.borderboolarrquo[1] == 'false') { this.bordercolorarrquo[1] = 'red'; } else { this.bordercolorarrquo[1] = 'blue'; } }
          if (i == 2) { if (this.borderboolarrquo[2] == 'false') { this.bordercolorarrquo[2] = 'red'; } else { this.bordercolorarrquo[2] = 'green'; } }
          if (i == 3) { if (this.borderboolarrquo[3] == 'false') { this.bordercolorarrquo[3] = 'red'; } else { this.bordercolorarrquo[3] = 'yellow'; } }
          if (i == 4) { if (this.borderboolarrquo[4] == 'false') { this.bordercolorarrquo[4] = 'red'; } else { this.bordercolorarrquo[4] = 'orange'; } }
          if (i == 5) { if (this.borderboolarrquo[5] == 'false') { this.bordercolorarrquo[5] = 'red'; } else { this.bordercolorarrquo[5] = 'purple'; } }

        }



      });
    },
    reset() {

      for (var i = 1; i < 5; i++) {
        for (var j = 0; j < this["borderboolarr" + i].length; j++) {
          this["bordercolorarr" + i][j] = 'black';
          this["borderboolarr" + i][j] = 'true';

        }
      }

      for (var i = 1; i < 5; i++) {
        this.borderboolarrquo[i] = 'true';
        if (i = 1) {
          this.bordercolorarrquo[i] = 'blue';
        }
        if (i = 2) {
          this.bordercolorarrquo[i] = 'green';
        }
        if (i = 3) {
          this.bordercolorarrquo[i] = 'yellow';
        }
        if (i = 4) {
          this.bordercolorarrquo[i] = 'orange';
        }
        if (i = 5) {
          this.bordercolorarrquo[i] = 'purple';
        }
      }


      this.quotientValues = [];
      this.inputValues1 = [];
      this.inputValues2 = [];

      this.inputValues3 = [];

      this.inputValues4 = [];

      this.inputValues5 = [];


    },
    info() {

      for (var i = 1; i < 5; i++) {
        for (var j = 0; j < this["borderboolarr" + i].length; j++) {
          this["bordercolorarr" + i][j] = 'black';
          this["borderboolarr" + i][j] = 'true';

        }
      }

      for (var i = 1; i < 5; i++) {
        this.borderboolarrquo[i] = 'true';
        if (i = 1) {
          this.bordercolorarrquo[i] = 'blue';
        }
        if (i = 2) {
          this.bordercolorarrquo[i] = 'green';
        }
        if (i = 3) {
          this.bordercolorarrquo[i] = 'yellow';
        }
        if (i = 4) {
          this.bordercolorarrquo[i] = 'orange';
        }
        if (i = 5) {
          this.bordercolorarrquo[i] = 'purple';
        }
      }

      var firstn = this.number;
      var secondn = this.secondnumber;

      var mult = firstn * secondn;

      var leftover: number[] = [];

      var smallest = 2 * secondn;
      var nodehanging = false;
      var secondhanging = false;
      var multi = secondn;
      //if odd 
      if (firstn % 2 != 0) {
        nodehanging = true;
      }
      var changeit = false;

      //go through the heights
      for (var i = 1; i < 10; i++) {

        var quotient = Math.floor(mult / smallest);

        var remainder = mult % smallest;

        //the top
        if (smallest >= mult) {

          this["inputValues" + i][0] = Math.pow(secondn,firstn);

          break;
        }


        for (var k = 0; k < quotient; k++) {
          if (this.levelquotient[i] > k && this.levelquotient[i] > 1) {
            this.quotientValues[i] =  Math.pow(secondn,(i)*2);
          }
          else {

            this["inputValues" + i][k] = Math.pow(secondn,(i)*2);
            console.log('here gets set Math.pow(secondn,(i*2))' + Math.pow(secondn,(i*2)) + 'for secondn  ' + secondn + 'and i = ' + i);

          }
        }

        if (changeit) {

          this["inputValues" + i][quotient] = Math.pow(secondn,(i-1)*2)*multi;        //not for bigger numbers
          console.log('here gets set Math.pow(secondn,(i-1)*2)*multi' + Math.pow(secondn,(i-1)*2)*multi + 'for secondn  ' + secondn + 'and i = ' + i);

          if (remainder != 0) {
            leftover.push(remainder);

          }
          if (leftover.length > 1) {
            leftover.shift();
          }

          changeit = false;
        }
        else if (leftover[leftover.length - 1] != remainder) {
          if (remainder != 0) {
            leftover.push(remainder);

          }

          if (leftover.length > 1) {
            this["inputValues" + i][quotient] = Math.pow(secondn,(i)*2 +1);       //is it executed?
            console.log('is this executed ? ');

            leftover.shift();
          }

        }

        if (quotient % 2 != 0) {
          if (nodehanging) {
            secondhanging = true;
          }
          else {nodehanging = true; multi = Math.pow(secondn,(i) *2);}
        }

        if (nodehanging && secondhanging) {
          changeit = true;
          nodehanging = false;
          secondhanging = false;
        }



        smallest = smallest * 2;

      }

      if (this.result == 'still false') {
        this.result = 'correct'
      }

    }
  }

});

</script>

<style scoped>
.level1 {
  flex-direction: row;
  align-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;

}

.level2 {
  flex-direction: row;
  align-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;

}

.level3 {
  flex-direction: row;
  align-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;

}

.level4 {
  flex-direction: row;
  align-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;

}

.level5 {
  flex-direction: row;
  align-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;

}

.flex-container1 {
  flex-direction: column;
  align-items: center;
  align-items: center;
  text-align: center;
  display: flex;
}

.flex-child:first-child {

  align-items: center;
  text-align: center;
  margin-right: 20px;
}

.flex-container {

  align-items: center;
  text-align: center;
  display: flex;

  justify-content: center;
}

.flex-child.magenta {
  margin-top: 0px;
  color: #E6DCF0;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 2em;
  font-family:'Times New Roman', Times, serif;
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

.title {
  text-align: center;
  color: #e8e2ed;
  font-family: cursive;
  margin-top: 26px;
  margin-bottom: 0px;
  font-size: 2em;
  text-shadow: -1px -1px 0 #3e3434, 1px -1px 0 #3e3434, -1px 1px 0 #3e3434, 1px 1px 0 #3e3434;
}

.outs {

  margin: 100px;
  margin-bottom: 70px;
  text-align: center;
}

.level0,
.level1,
.level2,
.level3,
.level4,
.level5 {
  align-items: center;
  text-align: center;
  gap: 50p;
}

.layout {
  gap: 50px;
}

.outputs {
  background-color: #F1935C;
  border: 2px solid black;
  padding: 15px;
  margin: 40px;
  margin-bottom: 10px;
  border-radius: 0.15rem;
  font-size: 17px;
}


#quo10,
#quo11,
#quo12,
#quo13,
#quo14,
#quo15,
#quo16,
#quo17,
#quo18,
#quo19,
#quo110,
#quo111,
#quo112,
#quo113,
#quo114,
#quo115,
#quo116,
#quo117,
#quo118,
#quo119,
#quo120,
#quo121,
#quo123,
#quo124 {
  border: 3px solid var(--borderColor);
  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#quo20,
#quo21,
#quo22,
#quo23,
#quo24,
#quo25,
#quo26,
#quo27,
#quo28,
#quo29,
#quo210,
#quo211,
#quo212,
#quo213,
#quo214,
#quo215,
#quo216,
#quo218,
#quo219,
#quo220,
#quo221,
#quo224 {
  border: 3px solid var(--borderColor);
  width: 80px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#quo30,
#quo31,
#quo32,
#quo33,
#quo34,
#quo35,
#quo36,
#quo37,
#quo38,
#quo39,
#quo310,
#quo311,
#quo312,
#quo313,
#quo314,
#quo315,
#quo316,
#quo317,
#quo318,
#quo319,
#quo320,
#quo321,
#quo323,
#quo324 {
  border: 3px solid var(--borderColor);

  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#quo40,
#quo41,
#quo42,
#quo43,
#quo44,
#quo45,
#quo46,
#quo47,
#quo48,
#quo49,
#quo410,
#quo411,
#quo412,
#quo413,
#quo414,
#quo415,
#quo416,
#quo417,
#quo418,
#quo419,
#quo420,
#quo421,
#quo423,
#quo424 {
  border: 3px solid var(--borderColor);


  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#quo50,
#quo51,
#quo52,
#quo53,
#quo54,
#quo55,
#quo56,
#quo57,
#quo58,
#quo59,
#quo510,
#quo511,
#quo512,
#quo513,
#quo514,
#quo515,
#quo516,
#quo517,
#quo518,
#quo519,
#quo520,
#quo521,
#quo523,
#quo524 {
  border: 3px solid var(--borderColor);

  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#str10,
#str11,
#str12 {

  border: 2px solid var(--borderColor);
  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;
}
#str20,
#str21,
#str22,
#str23,
#str24,
#str25,
#str26,
#str27,
#str28,
#str29,
#str210,
#str211,
#str212,
#str213,
#str214,
#str215,
#str216,
#str217,
#str218,
#str219,
#str220 {
  border: 2px solid var(--borderColor);
  width: 80px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#str30,
#str31,
#str32,
#str33,
#str34,
#str35,
#str36,
#str37,
#str38,
#str39,
#str310,
#str311,
#str312,
#str313,
#str314,
#str315,
#str316,
#str317,
#str318,
#str319,
#str320 {
  border: 2px solid var(--borderColor);
  width: 90px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#str40,
#str41,
#str42,
#str43,
#str44,
#str45,
#str46,
#str48,
#str49,
#str410,
#str411,
#str412,
#str413,
#str414,
#str415,
#str416,
#str417,
#str418,
#str419,
#str420 {
  border: 2px solid var(--borderColor);
  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;

}

#str50,
#str51,
#str52,
#str53,
#str54,
#str55,
#str56,
#str57,
#str58,
#str59,
#str510,
#str511,
#str513,
#str514,
#str515,
#str516,
#str517,
#str519,
#str520 {
  border: 2px solid var(--borderColor);
  width: 55px;
  height: 55px;
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 17px;



}

@media screen and (min-height: 600px) and (max-height: 1000px) {

  .title {
    color: #e8e2ed;
    font-family: cursive;
    margin-top: 0px;
    font-size: 1.5em;
    text-shadow: -1px -1px 0 #3e3434, 1px -1px 0 #3e3434, -1px 1px 0 #3e3434, 1px 1px 0 #3e3434;

  }

  #quo10,
  #quo11,
  #quo12,
  #quo13,
  #quo14,
  #quo15,
  #quo16,
  #quo17,
  #quo18,
  #quo19,
  #quo110,
  #quo111,
  #quo112,
  #quo113,
  #quo114,
  #quo115,
  #quo116,
  #quo117,
  #quo118,
  #quo119,
  #quo120,
  #quo121,
  #quo123,
  #quo124 {
    border: 3px solid var(--borderColor);
    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #quo20,
  #quo21,
  #quo22,
  #quo23,
  #quo24,
  #quo25,
  #quo26,
  #quo27,
  #quo28,
  #quo29,
  #quo210,
  #quo211,
  #quo212,
  #quo213,
  #quo214,
  #quo215,
  #quo216,
  #quo218,
  #quo219,
  #quo220,
  #quo221,
  #quo224 {
    border: 3px solid var(--borderColor);
    width: 80px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #quo30,
  #quo31,
  #quo32,
  #quo33,
  #quo34,
  #quo35,
  #quo36,
  #quo37,
  #quo38,
  #quo39,
  #quo310,
  #quo311,
  #quo312,
  #quo313,
  #quo314,
  #quo315,
  #quo316,
  #quo317,
  #quo318,
  #quo319,
  #quo320,
  #quo321,
  #quo323,
  #quo324 {
    border: 3px solid var(--borderColor);

    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #quo40,
  #quo41,
  #quo42,
  #quo43,
  #quo44,
  #quo45,
  #quo46,
  #quo47,
  #quo48,
  #quo49,
  #quo410,
  #quo411,
  #quo412,
  #quo413,
  #quo414,
  #quo415,
  #quo416,
  #quo417,
  #quo418,
  #quo419,
  #quo420,
  #quo421,
  #quo423,
  #quo424 {
    border: 3px solid var(--borderColor);


    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #quo50,
  #quo51,
  #quo52,
  #quo53,
  #quo54,
  #quo55,
  #quo56,
  #quo57,
  #quo58,
  #quo59,
  #quo510,
  #quo511,
  #quo512,
  #quo513,
  #quo514,
  #quo515,
  #quo516,
  #quo517,
  #quo518,
  #quo519,
  #quo520,
  #quo521,
  #quo523,
  #quo524 {
    border: 3px solid var(--borderColor);

    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #str10,
  #str11,
  #str12 {
border: 2px solid var(--borderColor);
    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;
}
  #str20,
  #str21,
  #str22,
  #str23,
  #str24,
  #str25,
  #str26,
  #str27,
  #str28,
  #str29,
  #str210,
  #str211,
  #str212,
  #str213,
  #str214,
  #str215,
  #str216,
  #str217,
  #str218,
  #str219,
  #str220 {
    border: 2px solid var(--borderColor);
    width: 90px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #str30,
  #str31,
  #str32,
  #str33,
  #str34,
  #str35,
  #str36,
  #str37,
  #str38,
  #str39,
  #str310,
  #str311,
  #str312,
  #str313,
  #str314,
  #str315,
  #str316,
  #str317,
  #str318,
  #str319,
  #str320 {
    border: 2px solid var(--borderColor);
    width: 90px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #str40,
  #str41,
  #str42,
  #str43,
  #str44,
  #str45,
  #str46,
  #str48,
  #str49,
  #str410,
  #str411,
  #str412,
  #str413,
  #str414,
  #str415,
  #str416,
  #str417,
  #str418,
  #str419,
  #str420 {
    border: 2px solid var(--borderColor);
    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;

  }

  #str50,
  #str51,
  #str52,
  #str53,
  #str54,
  #str55,
  #str56,
  #str57,
  #str58,
  #str59,
  #str510,
  #str511,
  #str513,
  #str514,
  #str515,
  #str516,
  #str517,
  #str519,
  #str520 {
    border: 2px solid var(--borderColor);
    width: 40px;
    height: 40px;
    margin: 25px;
    margin-bottom: 0px;
    margin-top: 13px;
    text-align: center;
    font-size: 14px;
  }

  .outputs {
    background-color: #F1935C;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    padding: 15px;
    margin: 25px;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 0.15rem;
    font-size: 14px;
  }
}

#the_task {
  margin: 0;
  margin-top: 5px;
  margin-bottom: 13px;
}

.outs {

  margin: 40px;
  margin-bottom: 40px;
  margin-left: 0px;
  margin-right: 0px;
  text-align: center;
}
</style>