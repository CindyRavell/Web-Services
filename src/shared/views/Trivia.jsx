import React from "react";
import {Card} from "../organisms/Card";

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

export const Trivia =()=>{
    return(
        <React.Fragment>
            <p style={style}>COUNTER:0/10</p>
            <Card />
            <button style={buttonStyle}>Previous</button>
            <button style={buttonStyle}>Answer</button>
            <button style={buttonStyle}>Next</button>

        </React.Fragment>
    );
};