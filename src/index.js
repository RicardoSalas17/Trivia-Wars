import './styles/main.scss';
import axios from 'axios';

// class Trivia {
//     constructor( trivias = [] ){

//     }
//     buildTrivia(url){}
// }

//Init
var body = document.getElementById("body");
var buttonStart = document.createElement("button");

//Select Dificulty
var dificulty = document.createElement("select");
var any= document.createElement("option");
any.value = "any";
any.innerHTML = "Any Difficulty";
dificulty.appendChild(any);
var easy= document.createElement("option");
easy.value = "easy";
easy.innerHTML = "Easy";
dificulty.appendChild(easy);
var medium = document.createElement("option");
medium.value = "medium";
medium.innerHTML = "Medium";
dificulty.appendChild(medium);
var hard = document.createElement("option");
hard.value = "hard";
hard.innerHTML = "Hard";
dificulty.appendChild(hard);

//Select Tiype
var type = document.createElement("select");
var anyType= document.createElement("option");
anyType.value = "Any";
anyType.innerHTML = "Any Type";
type.appendChild(anyType);
var multipleChoice = document.createElement("option");
multipleChoice.value = "multiple";
multipleChoice.innerHTML = "Multiple Choice";
type.appendChild(multipleChoice);
var trueFalse = document.createElement("option");
trueFalse.value = "boolean";
trueFalse.innerHTML = "True/False";
type.appendChild(trueFalse);

//Category
var category = document.createElement("select");
const categoryList = () =>{
    axios.get('https://opentdb.com/api_category.php')
    .then(response => {
        const categories = response.data.trivia_categories;
        let allCategoriesList ={}
        let indexCategory = 9
        var anyCategory= document.createElement("option");
        anyCategory.value = 0;
        anyCategory.innerHTML = `Any Category`;
        category.appendChild(anyCategory);
            categories.forEach(element => {
                allCategoriesList[indexCategory] = document.createElement("option");
                allCategoriesList[indexCategory].value = `${indexCategory}`;
                allCategoriesList[indexCategory].innerHTML = `${element.name}`;
                category.appendChild(allCategoriesList[indexCategory]);
                indexCategory++
            });
        })
        .catch(function (error) {
            alert('Error!');
            console.log(error);
        });
}
categoryList();

//Generate URL for API
var buttonGenerateStart = document.createElement("button");
buttonGenerateStart.innerHTML = "Let It Be";
const generateTrivia = () => {
    let dificultySelect=dificulty.value.toLowerCase();
    let typeSelect=type.value.toLowerCase();
    let categorySelectFail=category.value;
    let categorySelect;
    if(categorySelectFail.includes("Entertainment")){
        categorySelect =categorySelectFail.replace("Entertainment: ", "").toLowerCase();
    }
    else if(categorySelectFail.includes("Science")){
        categorySelect =categorySelectFail.replace("Science: ", "").toLowerCase();
    }
    else{
        categorySelect =categorySelectFail.toLowerCase();
    }
    console.log('Select: ', categorySelect, typeSelect,dificultySelect);
}
    

const showMenu = () => {
    body.removeChild(buttonStart);
    body.appendChild(dificulty);
    body.appendChild(type);
    body.appendChild(category);
    body.appendChild(buttonGenerateStart);
    buttonGenerateStart.addEventListener("click", generateTrivia);
    }

const init = () => { 
    buttonStart.innerHTML = "START";
    body.appendChild(buttonStart);
    buttonStart.addEventListener("click", showMenu);
    }
    init();