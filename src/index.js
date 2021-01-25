import "./styles/main.scss";
import axios from "axios";
import Trivia from "./trivia";
import * as Canvas from "./canvas"

//Init
let counterGeneral = 1;
let body = document.getElementById("body");
body.className = "init";
let buttonStart = document.createElement("button");
buttonStart.className = "initBut";
let starWarsLetters = document.createElement("section");
starWarsLetters.className="star-wars"
let crawl= document.createElement("div")
crawl.className="crawl"
starWarsLetters.appendChild(crawl)
crawl.innerHTML=`<div class="title">
<h1>Trivia-Wars</h1>
<p>A DEV-F project</p>
</div><p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>      
<p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
<p>Pursued by the Empire’s sinister agents, the Rebels need to solve a Trivia and then they can save people and restore freedom to the galaxy…</p>`
starWarsLetters.className="star-wars"
let fade= document.createElement("div");
fade.className="fade"
//Select difficulty
let difficulty = document.createElement("select");
let any = document.createElement("option");
any.value = "any";
any.innerHTML = "Any Difficulty";
difficulty.appendChild(any);
let easy = document.createElement("option");
easy.value = "easy";
easy.innerHTML = "Easy";
difficulty.appendChild(easy);
let medium = document.createElement("option");
medium.value = "medium";
medium.innerHTML = "Medium";
difficulty.appendChild(medium);
let hard = document.createElement("option");
hard.value = "hard";
hard.innerHTML = "Hard";
difficulty.appendChild(hard);

//Select Tiype
let type = document.createElement("select");
let anyType = document.createElement("option");
anyType.value = "Any";
anyType.innerHTML = "Any Type";
type.appendChild(anyType);
let multipleChoice = document.createElement("option");
multipleChoice.value = "multiple";
multipleChoice.innerHTML = "Multiple Choice";
type.appendChild(multipleChoice);
let trueFalse = document.createElement("option");
trueFalse.value = "boolean";
trueFalse.innerHTML = "True/False";
type.appendChild(trueFalse);

//Description
let p = document.createElement("p");
p.className="description"
p.innerHTML="Solve the trivia and get a marker of 1000 points or more."


//Sound efects
let rTwo = new Audio()
rTwo.src = "../songs/Happy ThreeChirp.mp3"

let duelSong= new Audio();
duelSong.src="../songs/8d82b5_Star_Wars_Duel_of_the_Fates_Theme_Song.mp3"

let songStart= new Audio();
songStart.src="../songs/8d82b5_Star_Wars_Main_Theme_Song.mp3"

window.addEventListener("DOMContentLoaded", event => {
  songStart.volume = 0.2;
  songStart.play();
});

let shotAudio= new Audio();
shotAudio.src="../songs/TIE fighter fire 2.mp3"

let winAudio = new Audio();
winAudio.src="../songs/8d82b5_Star_Wars_Cantina_Theme_Song.mp3"

let lostAudio = new Audio();
lostAudio.src="../songs/8d82b5_Star_Wars_The_Imperial_March_Theme_Song.mp3"
//canvas
const canvas =document.getElementById("canvas");


//Category
let category = document.createElement("select");
const categoryList = () => {
  axios
    .get("https://opentdb.com/api_category.php")
    .then((response) => {
      const categories = response.data.trivia_categories;
      let allCategoriesList = {};
      let indexCategory = 9;
      let anyCategory = document.createElement("option");
      anyCategory.value = 0;
      anyCategory.innerHTML = `Any Category`;
      category.appendChild(anyCategory);
      categories.forEach((element) => {
        allCategoriesList[indexCategory] = document.createElement("option");
        allCategoriesList[indexCategory].value = indexCategory;
        let categoryName;
        if (element.name.includes("Entertainment")) {
          categoryName = element.name.replace("Entertainment: ", "");
        } else if (element.name.includes("Science")) {
          categoryName = element.name.replace("Science: ", "");
        } else {
          categoryName = element.name;
        }
        allCategoriesList[indexCategory].innerHTML = `${categoryName}`;
        category.appendChild(allCategoriesList[indexCategory]);
        indexCategory++;
      });
    })
    .catch(function (error) {
      alert("Error!");
      console.log(error);
    });
};
categoryList();

//Finish Menu Elements
let buttonRestart = document.createElement("button");
let result = document.createElement("h1");
let total = document.createElement("h1");

//Generate URL for API
let buttonGenerateStart = document.createElement("button");
buttonGenerateStart.innerHTML = "Start trivia";
const generateTrivia = () => {
  let categorySelect = Number(category.value);
  let typeSelect = type.value.toLowerCase();
  let difficultySelect = difficulty.value.toLowerCase();
  let URL_GEN;
  rTwo.play()
  songStart.pause();
  songStart.currentTime = 0
  const urlGenerator = () => {
    if (
      typeSelect == "any" &&
      difficultySelect == "any" &&
      categorySelect == 0
    ) {
      URL_GEN = `https://opentdb.com/api.php?amount=10`;
    } else if (categorySelect == 0 && typeSelect == "any") {
      URL_GEN = `https://opentdb.com/api.php?amount=10&difficulty=${difficultySelect}`;
    } else if (categorySelect == 0 && difficultySelect == "any") {
      URL_GEN = `https://opentdb.com/api.php?amount=10&type=${typeSelect}`;
    } else if (typeSelect == "any" && difficultySelect == "any") {
      URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}`;
    } else if (categorySelect == 0) {
      URL_GEN = `https://opentdb.com/api.php?amount=10&difficulty=${difficultySelect}&type=${typeSelect}`;
    } else if (typeSelect == "any") {
      URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}&difficulty=${difficultySelect}`;
    } else if (difficultySelect == "any") {
      URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}&type=${typeSelect}`;
    } else {
      URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}&difficulty=${difficultySelect}&type=${typeSelect}`;
    }
  };
  urlGenerator();
  axios
    .get(URL_GEN)
    .then((response) => {
      let dataGet = response.data.results;
      const trivia = new Trivia(dataGet, difficultySelect, Canvas.xWing, Canvas.tieFight);
      duelSong.play();
      trivia.questionsGen();
      menuOut();
      canvas.className ="showCanvas"
      body.appendChild(canvas);
      Canvas.update();
    })
    .catch(function (error) {
      alert("Try other combination!");
      console.log(error);
    });
};

//Show Menu
const showMenu = () => {
  rTwo.play()
  body.className = "init";
  if (counterGeneral == 1) {
    body.removeChild(buttonStart);
    body.removeChild(starWarsLetters)
  }
  if (counterGeneral >= 2) {
    // duelSong.pause();
    // duelSong.currentTime = 0;
    winAudio.pause();
    lostAudio.pause();
    winAudio.currentTime = 0;
    lostAudio.currentTime = 0;
    songStart.play();
    body.removeChild(buttonRestart);
    body.removeChild(result);
    body.removeChild(total);
  }
  body.appendChild(difficulty);
  body.appendChild(type);
  body.appendChild(category);
  body.appendChild(buttonGenerateStart);
  body.appendChild(p);
  buttonGenerateStart.addEventListener("click", generateTrivia);
};
//MenuOut
const menuOut = () => {
  body.removeChild(type);
  body.removeChild(category);
  body.removeChild(difficulty);
  body.removeChild(buttonGenerateStart);
  body.removeChild(p);
  body.className = "";
};
//play song
// const  onload = () => {
//   songStart.play()
// }
//Init Game
const init = () => {
  buttonStart.innerHTML = "START";
  body.appendChild(buttonStart);
  body.appendChild(fade);
  body.appendChild(starWarsLetters);
  buttonStart.addEventListener("click", showMenu);
  // onload()
};
init();

//Finish Game
const finish = (finalDataTrivia) => {
  duelSong.pause();
  duelSong.currentTime = 0;
  counterGeneral++;
  let marker = finalDataTrivia.marker;
  buttonRestart.innerHTML = `Restart`;
  body.appendChild(buttonRestart);
  buttonRestart.addEventListener("click", showMenu);

  //Win
  if (marker >= 1000) {
    result.innerHTML = "YOU WIN!";
    total.innerHTML = `${marker}`;
    canvas.className="dontShowCanvas"
    winAudio.play()
    body.className  ="init";
    body.appendChild(result);
    body.appendChild(total);
  }
  //Lose
  else {
    result.innerHTML = "YOU LOSE!";
    total.innerHTML = `${marker}`;
    canvas.className="dontShowCanvas";
    lostAudio.play()
    body.className="init";
    body.appendChild(result);
    body.appendChild(total);
  }
};


export  {canvas as canvas, finish as finish, shotAudio as shotAudio }










