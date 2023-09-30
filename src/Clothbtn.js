import React from "react";
import "./btn.css"

var i = 1;
function clothbtnBefore(){
    let clothImg = document.getElementById("clothImg");
      if(i === 1){
        i = 26;
      }
      i--;
      clothImg.setAttribute('src', 'img/cloth/cloth' + i + '.png');
      console.log(i);

}
  
  function clothbtnNext(){
    let clothImg = document.getElementById("clothImg");
      if(i === 25){
        i = 0;
      }
      i++;
      clothImg.setAttribute('src', 'img/cloth/cloth' + i + '.png');
      console.log(i);

}

function Clothbtn(){
    return(
        <div className="btn">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <span class="material-icons" onClick={() => clothbtnBefore()}>arrow_back</span>
          <p>CLOTH</p>
          <span class="material-icons" onClick={() => clothbtnNext()}>arrow_forward</span>
      </div>
    )
}

export default Clothbtn;