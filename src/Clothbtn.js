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
        <div>
            <button className='accBtn' onClick={() => clothbtnBefore()}>옷 이전!</button>
            <button className='accBtn' onClick={() => clothbtnNext()}>옷 이후!</button>
        </div>
    )
}

export default Clothbtn;