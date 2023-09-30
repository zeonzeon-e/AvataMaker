import React from "react";
import "./btn.css"

var i = 1;
function hairbtnBefore(){
    let hairImg = document.getElementById("hairImg");
      if(i === 1){
        i = 33;
      }
      i--;
      hairImg.setAttribute('src', 'img/hair/hair' + i + '.png');
      console.log(i);

}
  
  function hairbtnNext(){
    let hairImg = document.getElementById("hairImg");
      if(i === 32){
        i = 0;
      }
      i++;
      hairImg.setAttribute('src', 'img/hair/hair' + i + '.png');
      console.log(i);

}

function Hairbtn(){
    return(
        <div>
            <button className='hairBtn' onClick={() => hairbtnBefore()}>머리 이전!</button>
            <button className='hairBtn' onClick={() => hairbtnNext()}>머리 이후!</button>
        </div>
    )
}

export default Hairbtn;