import React, { useEffect,useState } from "react";
import {Card} from "../organisms/Card";
import {fetchQuestions} from "../services/triviaService";

const style ={
    backgroundColor: "#D9EAF8",
    margin: "50px",
    padding:"30px",
    borderRadius:"15px",

};

const buttonStyle={
    margin:"10px",
    fontSize: "20px",
}

const buttonNavigation={
    display: "flex",
    justifyContent: "center",    

}
/*useEffect de React, funcion/operacion que nos permite manejar eventos con base a una funcion terminada
, nos permite determinar un cambio y se actualice una vista */
export const Trivia =()=>{
    /* El useState los estados que usa react, no se deben reasignar valores en una operación funcional, porque se quiere que se haga una variable directamente o usar el useState
     El único argumento para el Hook useState() es el estado inicial.
     Devuelve una pareja de valores: el estado actual y una función que lo actualiza
    */
    const [questions, updateQuetions] = useState();
    // auqne interna,ente en use Effect se está esperando, lo demás se está ejecutando,
    //por eso necesitamos el loading para poder consologuear luego las preguntas, sino tarda en escontrar la información
    const [isLoading, updateLoading] = useState(true);
    const [questionNo, updateQuestionNo] = useState(0);
    const [counter, updateCounter]=useState (0);
    
    useEffect(()=>{
        const receiveQuestions =async() => {
            //Que se updatee el updateQuestions cuando fetchQuestions termine
            updateQuetions(await fetchQuestions());
            updateLoading(false);
        };
        receiveQuestions();
    },[]);

    //Se envia luego a Card la funcion, en la sección de enviosh
    const handleCallback = (isCorrect)=>{
        if(isCorrect){
            if(counter<10){
            updateCounter(counter+1)
            }
        }
    }

    const handleQuestionJump = (step) =>{
        if(questionNo<9 && step ==="forth"){
            updateQuestionNo(questionNo+1)
        }

        if(questionNo>0 && step ==="back"){
            updateQuestionNo(questionNo-1)
        }
    }

    if(isLoading){
        return<p>Loading...</p>
    }
    if(!isLoading){
        console.log(questions)
    

    return(
        <React.Fragment>
            
            <p style={style}>COUNTER:{counter}/10</p>
            <Card 
            //coloco la información que necesita card, los props SECCIÓN ENVIOSH
            question = {questions[questionNo].question}
            answers = {questions[questionNo].incorrect_answers}
            correctAnswer={questions[questionNo].correct_answer}
            isCorrectCounter = {handleCallback}

            />
            <div style={buttonNavigation}>
                <button 
                    style={buttonStyle}
                    onClick ={()=>handleQuestionJump('back')}
                    >Previous</button>
                <button style={buttonStyle}>Answer</button>
                <button 
                    style={buttonStyle}
                    onClick={()=>handleQuestionJump('forth')}
                    >Next</button>
                
            </div>
            

        </React.Fragment>
    );
}
};