import React from "react";
import "./btn.css";
import right from "./Arrow/rightArrow.png";
import left from "./Arrow/leftArrow.png";

var i = 1;
function hairbtnBefore(){
    let hairImg = document.getElementById("hairImg");
      if(i === 1){
        i = 33;
      }
      i--;
      hairImg.setAttribute('src', 'hair/hair' + i + '.png');
      console.log(i);

}
  
  function hairbtnNext(){
    let hairImg = document.getElementById("hairImg");
      if(i === 32){
        i = 0;
      }
      i++;
      hairImg.setAttribute('src', 'hair/hair' + i + '.png');
      console.log(i);

}

function Hairbtn(){
    return(
      <div className="btn">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <span class="material-icons" onClick={() => hairbtnBefore()}><img src={left} /></span>
        <p>HAIRSTAYLE</p>
        <span class="material-icons" onClick={() => hairbtnNext()}><img src={left} /></span>
    </div>
    )
}

export default Hairbtn;