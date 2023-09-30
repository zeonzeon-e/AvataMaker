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
        <div>
            <button className='eyesBtn' onClick={() => eyesbtnBefore()}>눈 이전!</button>
            <button className='eyesBtn' onClick={() => eyesbtnNext()}>눈 이후!</button>
        </div>
    )
}

export default Eyesbtn;