<template>
    <h1> {{task_name}} </h1>
    <div id="buttons">
      <router-link v-if = "is_ex1" to = "/ex2">
        <button @click = deletelines()  v-if = "is_ex1" class="button" id="1">
          <img class= "next_img" src="../assets/next.png" /> 
          <br> <span> Nächste Aufgabe </span>
        </button>
      </router-link>
 
      <router-link v-else-if = "is_ex2" to = "/ex3">
        <button @click = deletelines() v-if = "is_ex2" class="button" id="2">
          <img class= "next_img" src="../assets/next.png" /> 
          <br> <span> Nächste Aufgabe </span>
        </button>
      </router-link>
      
  
      <router-link to="/" style="text-decoration: none; color: black">
        <button @click = deletelines() class="button" id="main_menu">
          
            <img id="main_menu_img" src="../assets/home.png" />
            <br> <span> Hauptmenü </span>
          
        </button>
      </router-link>
    </div>
    
    
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HelloWorld',
    props: [
      'task_number',
      'task_name',
      'is_ex1',
      'is_ex2',
      "is_ex3",
      "lines"
    ],
    methods: {
      deletelines() {
        for (var i  = 0; i<this.lines.length; i++) {
          this.lines[i].remove();
        }
      
        this.lines = [];
        console.log('hi')
      },

      reloadPage(){
        location.reload()
      },
      getImage(){
        var pic = this.picture
        console.log(`../assets/${this.picture}.png`)
        return require(`../assets/${this.picture}.png`)
      },
    }
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1{
    display: flex;
      align-items: center;
      justify-content: center;
      color:#E6DCF0;
      
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
      width:50%; 
      height: auto
    }
  
    .button:hover {
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 90%);
    }
  
    #main_menu, #next_task {
      height: 80px;
      width: 150px;
    }
  
    router-link {
      text-decoration: none; 
      color: black;
    }
  </style>