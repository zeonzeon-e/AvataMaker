import React from "react";
import "./btn.css"

var i = 1;
function eyesbtnBefore(){
    let eyesImg = document.getElementById("eyesImg");
      if(i === 1){
        i = 7;
      }
      i--;
      eyesImg.setAttribute('src', 'img/eyes/eyes' + i + '.png');
      console.log(i);

}
  
  function eyesbtnNext(){
    let eyesImg = document.getElementById("eyesImg");
      if(i === 6){
        i = 0;
      }
      i++;
      eyesImg.setAttribute('src', 'img/eyes/eyes' + i + '.png');
      console.log(i);

}

function Eyesbtn(){
    return(
        <div className="btn">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <span class="material-icons" onClick={() => eyesbtnBefore()}>arrow_back</span>
          <p>EYES</p>
          <span class="material-icons" onClick={() => eyesbtnNext()}>arrow_forward</span>
      </div>
    )
}

export default Eyesbtn;