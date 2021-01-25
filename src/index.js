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
      trivia.questionsGen();
      menuOut();
    })
    .catch(function (error) {
      alert("Error!");
      console.log(error);
    });
    canvas.className ="showCanvas"
    body.appendChild(canvas);
    Canvas.update();
};

//Show Menu
const showMenu = () => {
  body.className = "init";
  if (counterGeneral == 1) {
    body.removeChild(buttonStart);
  }
  if (counterGeneral >= 2) {
    body.removeChild(buttonRestart);
    body.removeChild(result);
    body.removeChild(total);
  }
  body.appendChild(difficulty);
  body.appendChild(type);
  body.appendChild(category);
  body.appendChild(buttonGenerateStart);
  buttonGenerateStart.addEventListener("click", generateTrivia);
};
//MenuOut
const menuOut = () => {
  body.removeChild(type);
  body.removeChild(category);
  body.removeChild(difficulty);
  body.removeChild(buttonGenerateStart);
  body.className = "";
};

//Init Game
const init = () => {
  buttonStart.innerHTML = "START";
  body.appendChild(buttonStart);
  buttonStart.addEventListener("click", showMenu);
};
init();

//Finish Game
const finish = (finalDataTrivia) => {
  counterGeneral++;
  let marker = finalDataTrivia.marker;
  buttonRestart.innerHTML = `Restart`;
  body.appendChild(buttonRestart);
  buttonRestart.addEventListener("click", showMenu);

  //Win
  if (marker >= 1000) {
    result.value = "YOU WIN!";
    total.value = `${marker}`;
    // body.removeChild(canvas)
    canvas.className="dontShowCanvas"
    body.className="init";
    body.appendChild(result);
    body.appendChild(total);
  }
  //Lose
  else {
    result.innerHTML = "YOU LOSE!";
    total.innerHTML = `${marker}`;
    // body.removeChild(canvas)
    canvas.className="dontShowCanvas";
    body.className="init";
    body.appendChild(result);
    body.appendChild(total);
  }
};


export  {canvas as canvas, finish as finish  }










