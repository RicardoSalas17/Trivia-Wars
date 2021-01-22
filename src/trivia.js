const questionContainer = document.createElement("div");
let time= document.createElement("h1");
let clockCounter = 1
class Trivia {
  constructor(trivia = [], difficulty) {
    this.trivia = trivia;
    this.difficulty = difficulty;
    this.round = [];
    this.marker = 0;
    this.questionShow = 0;
  }
  questionsGen() {
    let numb = 1;
    let index = 0;
    let timeDif;
    let pointDif;
    this.trivia.forEach((element) => {
      let listAnsw = [element.correct_answer];
      let ind = 1;
      element.incorrect_answers.forEach((answ) => {
        listAnsw[ind] = answ;
        ind++;
      });
      if (element.difficulty == "hard") {
        timeDif = 11;
        pointDif = 100;
      } else if (element.difficulty == "easy") {
        timeDif = 21;
        pointDif = 200;
      } else if (element.difficulty == "medium") {
        timeDif = 16;
        pointDif = 150;
      }
      this.round[index] = {
        number: numb,
        question: element.question,
        answers: listAnsw,
        correctAnswer: element.correct_answer,
        difficultyChose: this.difficulty,
        difficultyOfQuestion: element.difficulty,
        time: timeDif,
        points: pointDif,
        htmlElements: {},
      };
      numb++;
      index++;
    });
    this.cardQuestions();
  }
  cardQuestions() {
    this.round.forEach((questions) => {
      let keyHtml = questions.htmlElements;
      keyHtml.ansHtml = [];
      keyHtml.hElement = document.createElement("h1");
      keyHtml.hElement.innerHTML = `${questions.number}: ${questions.question}`;
      questions.answers.forEach((ans) => {
        let indAns = document.createElement("button");
        indAns.innerHTML = `${ans}`;
        indAns.value = `${ans}`;
        indAns.addEventListener("click", () => {
          this.round[this.questionShow].chooseAnswer = ans;
          this.gameCheck(this.questionShow);
        });
        keyHtml.ansHtml.push(indAns);
      });
    });
    this.showTrivia();
  }
  timeQuestion(data){
    let times =this.round[this.questionShow].time
     const timer =()=> {
      if(clockCounter == data.number){
    if(times > 0){
      if(times == 0){
        times  = 59;
      }
      else{
        times  = times  - 1;
      }
      if(times .toString().length == 1){
        times  = "0" + times ;
      }
      time.innerHTML = times ;
      setTimeout(timer, 1000);
    }
    else{
      this.gameCheck(this.questionShow);
    }
  }else if(data.number == 10){ 
  }
  }
   timer()
  }
  showTrivia() {
    const htmlKeyH = this.round[this.questionShow].htmlElements.hElement;
    questionContainer.appendChild(htmlKeyH);
    window.body.appendChild(questionContainer);
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        } 
        return array;
    }
    let htmlKeyB = this.round[this.questionShow].htmlElements.ansHtml;
    shuffle(htmlKeyB); 
    htmlKeyB.forEach((ans) => {
      questionContainer.appendChild(ans);
    });
    
    questionContainer.appendChild(time);
    this.timeQuestion(this.round[this.questionShow]);
  }
  gameCheck(ind) {
    if (ind < this.round.length - 1) {
      let elementKeys = this.round[ind].htmlElements;
      let correctAnswer = this.round[ind].correctAnswer;
      let chosenAnswer = this.round[ind].chooseAnswer;
      console.log('chosenAnswer: ', chosenAnswer);
      let points = this.round[ind].points;
      if (correctAnswer == chosenAnswer) {
          // console.log('chosenAnswer: ', chosenAnswer);
          // console.log('correctAnswer: ', correctAnswer);
          // console.log("Correcto    +", points);
          this.marker += points;
          // console.log("Marker", this.marker);
        }else if(chosenAnswer===undefined){
          // console.log("Se acabo el tiempo")
          this.round[ind].chooseAnswer = "End Time"
        }
        else{
            // console.log('chosenAnswer: ', chosenAnswer);
            // console.log('correctAnswer: ', correctAnswer);
            // console.log("InCorrecto ----", points);
      }
      questionContainer.removeChild(elementKeys.hElement);
      questionContainer.removeChild(time);
      elementKeys.ansHtml.forEach((element) => {
        questionContainer.removeChild(element);
      });
      if(this.questionShow==0||this.questionShow<10){
        this.questionShow++;
      }
      if(this.questionShow >= 1){
        clockCounter++
      }
      this.showTrivia();
    } else {
      let elementKeys = this.round[ind].htmlElements;
      questionContainer.removeChild(elementKeys.hElement);
      questionContainer.removeChild(time);
      elementKeys.ansHtml.forEach((element) => {
        questionContainer.removeChild(element);
      }) 
      if(this.marker >= 1000){
          console.log("WIN");
          console.log("Marker", this.marker);
          console.log("round", this.round);
        }else{
          console.log("LOSE");
          console.log("Marker", this.marker);
          console.log("round", this.round);
      }
    }
  }
}
export default Trivia;
