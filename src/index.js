import "./styles/main.scss";
import axios from "axios";
import Trivia from "./trivia";
// import Board from "./canvas"

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
const canvas =document.createElement("canvas");
// canvas.with="100%"
// canvas.height="100%"



const ctx = canvas.getContext('2d')
let interval
let frames = 0
let gravity = 8.9
const stars = []
class Board {
    constructor() {
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.img = new Image()
      this.img.src ='https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  
  class XWing {
    constructor() {
      this.width = 50
      this.height = 40
      this.y = canvas.height - this.height
      this.x = 40
      this.img = new Image()
      this.img.src =
        'https://previews.dropbox.com/p/thumb/ABAcg5Xl-d-RRZAdpMvTtjwcnlizHF1i2HCbYMUp2t4WAOx1Wx-KdqasI-YbUiZjL0E-baPppS0_nl9gBv4a3CdTkmJhPd9DcrC0e6Xm8enZWeDEPJef9qp6IA1vckW6xenoc5Qu6h1X8JLYXIWSELS0YQ4zIx5cTiAkfaFEmgmu3r4eC7lHNQbmLyXWWx23JQwPdlcHgiw7chlgSxo9efK1lZO9yRwPU6GVwPUn0DpSkrCuQShuE2ENMTx3AR0X_VuC4sPB08Eqvdf51tr80dNehFe8ob8HEL0VIzRCWUZ3vawQ4R-uPGjYV4L2VQBizUTWJNkOxb15Iu4ie24Q9Q3N9Qets7I_PUm6Kw-He-jpsw/p.png?fv_content=true&size_mode=5'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    // isTouching(obstacle) {
    //   // algo está tratando de ocupar el mismo espacio en canvas que flash
    //   return (
    //     this.x < obstacle.x + obstacle.width &&
    //     this.x + this.width > obstacle.x &&
    //     this.y < obstacle.y + obstacle.height &&
    //     this.y + this.height > obstacle.y
    //   )
    // }
    // moveLeft() {
    //   this.vx -= 3
    //   this.position = 1
    // }
    // moveRight() {
    //   this.vx += 3
    //   this.position = 2
    // }
    // jump() {
    //   this.vy = -this.jumpStrenght * 2
    // }
  }
const flash = new XWing()
  function flashAnimation() {
    if (frames % 5 === 0) {
      if (flash.animate === 3) {
        flash.animate = 0
      } else {
        flash.animate++
      }
    }
  }

  class TieFighter {
    constructor() {
      this.width = 55
      this.height = 40
      this.y =  this.height
      this.x = 40
      this.img = new Image()
      this.img.src =
      'https://previews.dropbox.com/p/thumb/ABAzThjXcVARB-N9_T9L2uxUQ2naJgvjaIwrvR8T7LYb-Pez0v-18COB5BdOpyGxSlhp3OolCbUIPH-iER4OjBkM00MSQAYnhvzFtGS5vkKiMvtQadcffU11Fyn6RCV-4JNio73uzT50O_wniNHNTvih4zOC6eT6vFxY-vgUN1P_ie202vCW4ZAun6gxlO-kdg0KWAwJ60iDRj2pQ36l5wPJ3LPzfgHznMcN6eo9XuZKLTGSj20fiZcxDTiuEd_uEYCRQzApATZ2yrUgxrQ4ud270AvNbc95U-HeF5iiRC19SJuFOdJ9Ypexf5yKlxrjo38ghwlGNdQfJqRFwled7fqjN0jFcqZf9LbPWDtjF95Scg/p.png?fv_content=true&size_mode=5'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    // isTouching(obstacle) {
    //   // algo está tratando de ocupar el mismo espacio en canvas que flash
    //   return (
    //     this.x < obstacle.x + obstacle.width &&
    //     this.x + this.width > obstacle.x &&
    //     this.y < obstacle.y + obstacle.height &&
    //     this.y + this.height > obstacle.y
    //   )
    // }
    // moveLeft() {
    //   this.vx -= 3
    //   this.position = 1
    // }
    // moveRight() {
    //   this.vx += 3
    //   this.position = 2
    // }
    // jump() {
    //   this.vy = -this.jumpStrenght * 2
    // }
  }
const tieFight = new TieFighter()
  function tieAnimation() {
    if (frames % 5 === 0) {
      if (tieFight.animate === 3) {
        tieFight.animate = 0
      } else {
        tieFight.animate++
      }
    }
  }


  
  class Star {
    constructor(y) {
      this.x = y
      this.y = -canvas.height 
      this.width = 3
      this.height = 3
      this.img = new Image()
      this.img.src = 'https://lh3.googleusercontent.com/proxy/wF0_Ij0YIGsYgX-EHJs0uLwyh2rlU8G_LlGu4B5U-hD4RecshpkIc29oDPJAvzIh1tnc56719aNedoTD1V1QqSnfoLJs3OFD'
    }
    draw() {
      this.y++
      ctx.drawImage(
        this.img,
         this.x,
          this.y, 
          this.width,
           this.height)
    }
  }

  function generateStars() {
    if (frames % 30 === 0) {
      const randomPosition = Math.floor(Math.random() * canvas.width)
      const star = new Star(randomPosition)
      stars.push(star)
    }
  }
  function drawStars() {
    stars.forEach(start => start.draw())
  }
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const board = new Board()
  function update() {
    frames++
    clearCanvas()
    board.draw()
    flashAnimation()
    flash.draw()
    tieFight.draw()
    tieAnimation()
    // flash.x += flash.vx
    // flash.y += flash.vy
    // flash.y += gravity
    // checkColitions()
    generateStars()
    drawStars()
    // gameOver()
  }
  interval = setInterval(update, 1000 / 60)







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
      const trivia = new Trivia(dataGet, difficultySelect);
      trivia.questionsGen();
      menuOut();
    })
    .catch(function (error) {
      alert("Error!");
      console.log(error);
    });
    canvas.className ="showCanvas"
    body.appendChild(canvas);
    const board = new Board()
    update();
    // drawObstacles();
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

const finish = (finalDataTrivia) => {
  counterGeneral++;
  let marker = finalDataTrivia.marker;
  buttonRestart.innerHTML = `Restart`;
  // buttonRestart.addEventListener("click", console.log("Contador",counterGeneral))
  body.appendChild(buttonRestart);
  buttonRestart.addEventListener("click", showMenu);

  //Win
  if (marker >= 1000) {
    result.value = "YOU WIN!";
    total.value = `${marker}`;
    body.appendChild(result);
    body.appendChild(total);
  }
  //Lose
  else {
    result.innerHTML = "YOU LOSE!";
    total.innerHTML = `${marker}`;
    body.appendChild(result);
    body.appendChild(total);
  }
};




// export default Trivia;




export default finish;