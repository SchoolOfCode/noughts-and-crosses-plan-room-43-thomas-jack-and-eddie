import React, {useState} from "react";
import Square from "../Square";
import "./index.css"


const boardTemplate = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
]; 

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

function Board(){
  
  const [turn, setTurn] = useState();

  const [gridValues, setGridValues] = useState(boardTemplate);
  function onClick(index){
    let newArray = [...gridValues];
    newArray[index]="x";
    setGridValues([...newArray])
    console.log(gridValues)};

    return (<div className="container">
    {gridSections.map((divClass, index)=>{ 
      return (
      <Square key={index} divName={divClass} value={gridValues[index]} onClick={()=>onClick(index)}/>
    )
    })}
  
    </div>)
}
export default Board