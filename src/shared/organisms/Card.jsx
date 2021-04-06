import React from "react";
const utf8 = require('utf8');

const style ={
    backgroundColor: "#D9EAf8",
    margin: "50px",
    padding:"30px",
    borderRadius:"15px",

};

//props: información que recibimos de un componente a otro
export const Card =({question,answers,correctAnswer, isCorrectCounter})=>
{
    const checkAnswer = (selectedAnswer) =>{
        isCorrectCounter(selectedAnswer === correctAnswer)
        console.log(selectedAnswer === correctAnswer);
      // return selectedAnswer === correctAnswer
    }

    //Funcion de respuestas aleatorias
    const shuffle = (array) =>{
        const newArray = array.slice()
        const temporal=[]

        while(newArray.length>0){
            const aleatoryNum = Math.floor(Math.random() * (newArray.length));
            temporal.push(newArray[aleatoryNum])
            newArray.splice(aleatoryNum,1)
            
        }
        return temporal
    }
    const allAnswers = ()=>{
        const answerArray = shuffle([...answers,correctAnswer]);

        return answerArray
    };
    

    return (
        <React.Fragment>
            
            <div style={style}>
                <h2 >{utf8.encode(question)}</h2>

                {allAnswers().map((answer,index) => (
                    <p key={index} onClick={()=>checkAnswer(answer)}>{answer}</p>
                ))}

                


            </div>


        </React.Fragment>
        
        
    );
};