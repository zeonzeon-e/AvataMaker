import React from "react";
import "./btn.css"

var i = 1;
function facebtnBefore(){
    let faceImg = document.getElementById("faceImg");
      if(i === 1){
        i = 9;
      }
      i--;
      faceImg.setAttribute('src', 'img/face/face' + i + '.png');
      console.log(i);

}
  
  function facebtnNext(){
    let faceImg = document.getElementById("faceImg");
      if(i === 8){
        i = 0;
      }
      i++;
      faceImg.setAttribute('src', 'img/face/face' + i + '.png');
      console.log(i);

}

function Facebtn(){
    return(
        <div>
            <button className='faceBtn' onClick={() => facebtnBefore()}>얼굴 이전!</button>
            <button className='faceBtn' onClick={() => facebtnNext()}>얼굴 이후!</button>
        </div>
    )
}

export default Facebtn;