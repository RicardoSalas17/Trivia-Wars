const questionContainer = document.createElement("div");
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
        timeDif = 0.1;
        pointDif = 100;
      } else if (element.difficulty == "easy") {
        timeDif = 1;
        pointDif = 200;
      } else if (element.difficulty == "medium") {
        timeDif = 0.5;
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
  }
  gameCheck(ind) {
    if (ind < this.round.length - 1) {
      let elementKeys = this.round[ind].htmlElements;
      let correctAnswer = this.round[ind].correctAnswer;
      let chosenAnswer = this.round[ind].chooseAnswer;
      let points = this.round[ind].points;
      if (correctAnswer == chosenAnswer) {
          console.log('chosenAnswer: ', chosenAnswer);
          console.log('correctAnswer: ', correctAnswer);
          console.log("Correcto    +", points);
          this.marker += points;
          console.log("Marker", this.marker);
        }else{
            console.log('chosenAnswer: ', chosenAnswer);
            console.log('correctAnswer: ', correctAnswer);
            console.log("InCorrecto ----", points);
      }
      questionContainer.removeChild(elementKeys.hElement);
      elementKeys.ansHtml.forEach((element) => {
        questionContainer.removeChild(element);
      });
      this.questionShow++;
      this.showTrivia();
    } else {
      let elementKeys = this.round[ind].htmlElements;
      questionContainer.removeChild(elementKeys.hElement);
      elementKeys.ansHtml.forEach((element) => {
        questionContainer.removeChild(element);
      }) 
      if(this.marker >= 1000){
          console.log("WIN");
          console.log("Marker", this.marker);
        }else{
            console.log("LOSE");
            console.log("Marker", this.marker);
      }
    }
  }
}
export default Trivia;
