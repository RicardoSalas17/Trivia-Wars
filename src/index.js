import './styles/main.scss';
import axios from 'axios';

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
                allCategoriesList[indexCategory].value = indexCategory;
                let categoryName
                    if(element.name.includes("Entertainment")){
                    categoryName =element.name.replace("Entertainment: ", "");
                    }
                    else if(element.name.includes("Science")){
                    categoryName =element.name.replace("Science: ", "");
                    }
                    else{
                    categoryName =element.name;
                    }
                allCategoriesList[indexCategory].innerHTML = `${categoryName}`;
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
    let categorySelect=Number(category.value);
    let typeSelect=type.value.toLowerCase();
    let dificultySelect=dificulty.value.toLowerCase();
    let URL_GEN
    const urlGenerator = () => {
     if(typeSelect == "any" && dificultySelect == "any" && categorySelect == 0){
        URL_GEN = `https://opentdb.com/api.php?amount=10`
    }
    else if(categorySelect == 0 && typeSelect == "any"){
        URL_GEN = `https://opentdb.com/api.php?amount=10&difficulty=${dificultySelect}`
    }
    else if(categorySelect == 0 && dificultySelect == "any"){
        URL_GEN = `https://opentdb.com/api.php?amount=10&type=${typeSelect}`
    }
    else if(typeSelect == "any" && dificultySelect == "any"){
        URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}`
    }
     else if(categorySelect == 0){
        URL_GEN =`https://opentdb.com/api.php?amount=10&difficulty=${dificultySelect}&type=${typeSelect}`;
    }
     else if(typeSelect == "any"){
        URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}&difficulty=${dificultySelect}`;
    }
     else if(dificultySelect =="any"){
        URL_GEN = `https://opentdb.com/api.php?amount=10&category=${categorySelect}&type=${typeSelect}`;
    }
    else{
        URL_GEN =`https://opentdb.com/api.php?amount=10&category=${categorySelect}&difficulty=${dificultySelect}&type=${typeSelect}`;
    }
}
 urlGenerator()
    console.log('URL_GEN: ', URL_GEN);
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