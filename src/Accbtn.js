import React from "react";
import "./btn.css"

var i = 1;
function accbtnBefore(){
    let accImg = document.getElementById("accImg");
      if(i === 1){
        i = 20;
      }
      i--;
      accImg.setAttribute('src', 'img/acc/acc' + i + '.png');
      console.log(i);

}
  
  function accbtnNext(){
    let accImg = document.getElementById("accImg");
      if(i === 19){
        i = 0;
      }
      i++;
      accImg.setAttribute('src', 'img/acc/acc' + i + '.png');
      console.log(i);

}

function Accbtn(){
    return(
        <div className="btn">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <span class="material-icons" onClick={() => accbtnBefore()}>arrow_back</span>
            <p>ACCESSORY</p>
            <span class="material-icons" onClick={() => accbtnNext()}>arrow_forward</span>
        </div>
    )
}

export default Accbtn;