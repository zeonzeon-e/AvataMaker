import React from "react";
import "./btn.css"

var i = 1;
function accbtnBefore(){
    let accImg = document.getElementById("accImg");
      if(i === 0){
        i = 19;
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
        <div>
            <button className='accBtn' onClick={() => accbtnBefore()}>약세서리 이전!</button>
            <button className='accBtn' onClick={() => accbtnNext()}>악세서리 이후!</button>
        </div>
    )
}

export default Accbtn;