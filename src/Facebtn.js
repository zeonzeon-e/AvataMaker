import React from "react";
import "./btn.css";
import right from "./Arrow/rightArrow.png";
import left from "./Arrow/leftArrow.png";

var i = 1;
function facebtnBefore(){
    let faceImg = document.getElementById("faceImg");
      if(i === 1){
        i = 9;
      }
      i--;
      faceImg.setAttribute('src', 'face/face' + i + '.png');
      console.log(i);

}
  
  function facebtnNext(){
    let faceImg = document.getElementById("faceImg");
      if(i === 8){
        i = 0;
      }
      i++;
      faceImg.setAttribute('src', 'face/face' + i + '.png');
      console.log(i);

}

function Facebtn(){
    return(
        <div className="btn">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <span class="material-icons" onClick={() => facebtnBefore()}><img src={left} /></span>
          <p>FACE</p>
          <span class="material-icons" onClick={() => facebtnNext()}><img src={right} /></span>
      </div>
    )
}

export default Facebtn;