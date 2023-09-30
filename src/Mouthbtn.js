import React from "react";
import "./btn.css"

var i = 1;
function mouthbtnBefore(){
    let mouthImg = document.getElementById("mouthImg");
      if(i === 1){
        i = 12;
      }
      i--;
      mouthImg.setAttribute('src', 'img/mouth/mouth' + i + '.png');
      console.log(i);

}
  
  function mouthbtnNext(){
    let mouthImg = document.getElementById("mouthImg");
      if(i === 11){
        i = 0;
      }
      i++;
      mouthImg.setAttribute('src', 'img/mouth/mouth' + i + '.png');
      console.log(i);

}

function Mouthbtn(){
    return(
        <div>
            <button className='mouthBtn' onClick={() => mouthbtnBefore()}>입 이전!</button>
            <button className='mouthBtn' onClick={() => mouthbtnNext()}>입 이후!</button>
        </div>
    )
}

export default Mouthbtn;