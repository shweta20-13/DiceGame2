import React from "react";

function RollDice({ rollDice, currentDice }) {

   
    return (
        <div className="diceContainer">
            <div className="dice" onClick={rollDice}>
                <img className="img1" src={`/img/dices/dice${currentDice}.jfif`} alt={`Dice ${currentDice}`} />
            </div>
            <p>CLICK ON DICE TO ROLL</p>
        </div>
    );
}

export default RollDice;
