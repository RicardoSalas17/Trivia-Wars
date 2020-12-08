import './styles/main.scss';
import axios from 'axios';

// class Trivia {}
const init = () => { 
    axios.get('https://opentdb.com/api.php?amount=10')
        .then(response => {
            const questions = response.data.results;
            console.log('questions: ', questions);
        })
        .catch(function (error) {
            alert('No funciono u_U');
            console.log(error);
        });
    }
    init();