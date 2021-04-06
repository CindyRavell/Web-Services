

const REQUEST_URL = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple'

//Obtengo la informacion y esperamos a que los obtenga (async), recuperamos recursos con fetch y esperamos

export const fetchQuestions = async() =>{
    return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => data['results'])
    .catch(function(){
        console.log(Error);
    });
};
