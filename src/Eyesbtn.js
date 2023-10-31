import React from "react";
import "./btn.css";
import right from "./Arrow/rightArrow.png";
import left from "./Arrow/leftArrow.png";

var i = 1;
function eyesbtnBefore(){
    let eyesImg = document.getElementById("eyesImg");
      if(i === 1){
        i = 7;
      }
      i--;
      eyesImg.setAttribute('src', 'eyes/eyes' + i + '.png');
      console.log(i);

}
  
  function eyesbtnNext(){
    let eyesImg = document.getElementById("eyesImg");
      if(i === 6){
        i = 0;
      }
      i++;
      eyesImg.setAttribute('src', 'eyes/eyes' + i + '.png');
      console.log(i);

}

function Eyesbtn(){
    return(
        <div className="btn">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <div class="material-icons" onClick={() => eyesbtnBefore()}>
            <img src={left} />
          </div>
          <p>EYES</p>
          <div class="material-icons" onClick={() => eyesbtnNext()}> <img src={right} /></div>
      </div>
    )
}

export default Eyesbtn;