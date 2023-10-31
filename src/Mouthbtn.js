import React from "react";
import "./btn.css";
import right from "./Arrow/rightArrow.png";
import left from "./Arrow/leftArrow.png";

var i = 1;
function mouthbtnBefore(){
    let mouthImg = document.getElementById("mouthImg");
      if(i === 1){
        i = 12;
      }
      i--;
      mouthImg.setAttribute('src', 'mouth/mouth' + i + '.png');
      console.log(i);

}
  
  function mouthbtnNext(){
    let mouthImg = document.getElementById("mouthImg");
      if(i === 11){
        i = 0;
      }
      i++;
      mouthImg.setAttribute('src', 'mouth/mouth' + i + '.png');
      console.log(i);

}

function Mouthbtn(){
    return(
        <div className="btn">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <span class="material-icons" onClick={() => mouthbtnBefore()}><img src={left} /></span>
          <p>MOUTH</p>
          <span class="material-icons" onClick={() => mouthbtnNext()}><img src={right} /></span>
      </div>
    )
}

export default Mouthbtn;