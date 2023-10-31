import React from "react";
import "./btn.css";
import right from "./Arrow/rightArrow.png";
import left from "./Arrow/leftArrow.png";

var i = 1;
function clothbtnBefore(){
    let clothImg = document.getElementById("clothImg");
      if(i === 1){
        i = 26;
      }
      i--;
      clothImg.setAttribute('src', 'cloth/cloth' + i + '.png');
      console.log(i);

}
  
  function clothbtnNext(){
    let clothImg = document.getElementById("clothImg");
      if(i === 25){
        i = 0;
      }
      i++;
      clothImg.setAttribute('src', 'cloth/cloth' + i + '.png');
      console.log(i);

}

function Clothbtn(){
    return(
        <div className="btn">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <span class="material-icons" onClick={() => clothbtnBefore()}><img src={left} /></span>
          <p>CLOTH</p>
          <span class="material-icons" onClick={() => clothbtnNext()}><img src={right} /></span>
      </div>
    )
}

export default Clothbtn;