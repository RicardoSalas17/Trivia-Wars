class Trivia {
    constructor(trivia = [], difficulty){
        this.trivia = trivia;
        this.difficulty = difficulty;
        this.round=[]
        this.marker
    }
    questionsGen(){
        let numb = 1
        let index = 0
        let timeDif
        this.trivia.forEach(element => {
            let listAnsw =[element.correct_answer]
            let ind= 1
            element.incorrect_answers.forEach(answ=>{
            listAnsw[ind] = answ
            ind++
            })
            if(element.difficulty == "hard"){
                timeDif = .10
            }else if(element.difficulty == "easy"){
                timeDif = 1
            }
            else if(element.difficulty == "medium"){
                timeDif = .50
            }
            this.round[index]= {
                number: numb,
                question: element.question,
                answers: listAnsw,
                correctAnswer: element.correct_answer,
                difficultyChose:this.difficulty,
                difficultyOfQuestion:element.difficulty,
                time:timeDif,
                points:100
            }
            numb ++
            index++
        })
        this.showTrivia()
    }
    showTrivia(){
        const questionContainer = document.createElement("div");
        const questionText = document.createElement("h1");
        window.body.appendChild(questionContainer);
        questionText.innerHTML = `${this.round[0].number}: ${this.round[0].question}`;
        questionContainer.appendChild(questionText);

        let indAns
        this.round[0].answers.forEach(ans=>{
            indAns = document.createElement("button");
            indAns.innerHTML = `${ans}`
            questionContainer.appendChild(indAns);
        })



        // buttonStars.addEventListener("click", window.showMenu);
    }


}

export default Trivia;