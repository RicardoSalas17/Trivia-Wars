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
            }
            numb ++
            index++
        })
        this.prueba()
    }
    prueba(){
        console.log(this.round)
    }


}

export default Trivia;