<template>
  <body>
    <RouterLink to="/about">
      <button class="btn_info">
        <img src="../assets/info_icon.png" />
        <div class="info_title"> Information </div>
      </button>
    </RouterLink>
    <br>
    <br>
    <br>
    <br>
    <br>

    <h1 id=header> &nbsp;&nbsp;&nbsp;&nbsp; Ägyptische Multiplikationen </h1>
    <br>
    <br>
    <br>

    <div class="tasks">

      <router-link to="/ex1" style="text-decoration: none; color: black">
        <div class="card">
          <h1> Aufgabe 1</h1>
          <img class="ex_image1" src="../assets/ex1_icon.png" />

        </div>
      </router-link>
      <router-link to="/ex2" style="text-decoration: none; color: black">
        <div class="card">
          <h1> Aufgabe 2</h1>
          <img class="ex_image" src="../assets/ex2_icon.png" />
        </div>
      </router-link>
      <router-link to="/ex3" style="text-decoration: none; color: black">
        <div class="card">
          <h1> Aufgabe 3</h1>
          <img class="ex_image" src="../assets/ex3_icon.png" />
        </div>
      </router-link>
      <router-link to="/ex4" style="text-decoration: none; color: black">
        <div class="card">
          <h1> Aufgabe 4</h1>
          <img class="ex_image4" src="../assets/ex4_icon.png" />
        </div>
      </router-link>
    
    </div>

    <div  class="tasks"> 
      
      <router-link to="/ex5" style="text-decoration: none; color: black">
        <div class="card">
          <h1> Aufgabe 5</h1>
          <img class="ex_image5" src="../assets/ex5_icon.png" />
        </div>
      </router-link>
      <router-link to="/ex6" style="text-decoration: none; color: black">
        <div class="card">
          <h1> Aufgabe 6</h1>
          <img class="ex_image6" src="../assets/ex6_icon.png" />
        </div>
      </router-link>
    </div>




  </body>
</template>



<style>
.ex_image {
  height: auto;
  width: auto;
  max-width: 150px;
  max-height: 150px;
  align-items: center;
  margin-left: 75px;
}


#header {
  height: 100%;
  left: 1.2em;
  right: 500;
  width: 800px;
  align-items: center;
  margin: 0 auto;
  font-size: 2.9em;
  font-family: cursive;
  font-weight: bold;
  color: #e6dcf0;
}

.card img {
  align-content: center;

}

.card h1 {
  text-align: center;
  font-family: cursive;

  color: #e6dcf0;
}

.card {
  border: 1px solid black;

  border-radius: 10px;
  transition: box-shadow .3s;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
  transition: .3s;
  padding: 15px;
  background-color: #B799E1;
  width: 300px;
  height: 250px;
  margin: 1.5em;
}

.card:hover {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 90%);
}

.card:click {
  background-color: black;
}

.tasks {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

html,
body {
  min-height: 100%;
}

html {

  background-image: url('/public/background.png');
  background-size: cover;
  background-repeat: no-repeat, center, center, fixed;

}

img {
  margin: 10px 0 5px 0;

}

.info_title {
  font-size: 1.3em;
  font-family: cursive;

}


.btn_info {
  margin: 10px 10px 0 0;
  cursor: pointer;
  min-height: 60px;
  min-width: 60px;
  background-color: #e6dcf0;
  border-radius: 15px;
  border: solid black;
  border-width: thin;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

}

.ex_image1 {
  width: 100%;
  height: auto;
}
.ex_image4 {
  width: 102%;
  height: auto;
  margin-left:-10px;
  margin-top: -2px;
}
.ex_image5 {
  height: auto;
  width: auto;
  max-width: 137px;
  max-height: 140px;
  align-items: center;
  margin-left: 85px;
}
.ex_image6 {
  width: 66%;
  height: auto;
  align-items: center;
margin-left:53px;
margin-top:-4px;
}
</style>
