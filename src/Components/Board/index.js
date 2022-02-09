import React, { useState } from "react";
import Square from "../Square";
import "./index.css";
import { checkWinner } from "../../checkWinner";

const boardTemplate = [null, null, null, null, null, null, null, null, null];

const gridSections = [
  "Top-Left",
  "Top-Middle",
  "Top-Right",
  "Middle-Left",
  "Middle-Centre",
  "Middle-Right",
  "Bottom-Left",
  "Bottom-Middle",
  "Bottom-Right",
];

function Board() {
  const [xTurn, setXTurn] = useState(true);

  const [gridValues, setGridValues] = useState(boardTemplate);

  function onClick(index) {
    //Check if square is empty
    if (gridValues[index] === null) {
      //Create new array and update value at index
      let newArray = [...gridValues];
      if (xTurn === true) {
        newArray[index] = "X";
      } else {
        newArray[index] = "O";
      }
      setGridValues([...newArray]);
      //Toggle whose turn it is
      setXTurn(!xTurn);
      //Check for a winner
      const winner = checkWinner(newArray);
      console.log(winner);
      if (winner && winner !== null) {
        alert(`${winner}!`);
      }
    } else {
      alert("This tile already contains a value");
    }
  }

  return (
    <div className="container">
      {gridSections.map((divClass, index) => {
        return (
          <Square
            key={index}
            divName={divClass}
            value={gridValues[index]}
            onClick={() => onClick(index)}
          />
        );
      })}
    </div>
  );
}
export default Board;
