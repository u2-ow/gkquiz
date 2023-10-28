import React from 'react';
import './Level.css';


type Props = {
  variant:"初級" | "中級" | "上級"
}
 const LevelLavel = ({variant}:Props) => {
  let bgColor = "";

  switch (variant){
    case "初級":
    bgColor = "green";
    break;
    case "中級":
    bgColor = "blue";
    break
    case "上級":
    bgColor = "pink";
    break
  }
  return (
    <div className={`${bgColor} labelLevel`}><p className='labelBtnInner'>{variant}</p></div>
  )
}

export default LevelLavel;


