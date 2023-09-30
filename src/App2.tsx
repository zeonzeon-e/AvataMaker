import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Reset.css';
import Accbtn from './Accbtn';
import Facebtn from './Facebtn';
import Clothbtn from './Clothbtn';
import Hairbtn from './Hairbtn';
import Eyesbtn from './Eyesbtn';
import Mouthbtn from './Mouthbtn';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { useRef } from 'react';

var i = 1;
// function accbtnBefore(){
//     let accImg = document.getElementById("accImg");
//       if(i === 1){
//         return;
//       }else{
//         i--;
//         accImg.setAttribute('src', 'img/acc/acc' + i + '.png');
//       }
// }
  
//   function accbtnNext(){
//     let accImg = document.getElementById("accImg");
//       if(i === 18){
//         return;
//       }else{
//         i++;
//         accImg.setAttribute('src', 'img/acc/acc' + i + '.png');
//       }
// }
function App() {
  // const divRef = useRef<HTMLDivElement>(null);

  // const handleDownload = async () => {
  //   if (!divRef.current) return;

  //   try {
  //     const div = divRef.current;
  //     const canvas = await html2canvas(div, { scale: 2 });
  //     canvas.toBlob((blob) => {
  //       if (blob !== null) {
  //         saveAs(blob, "result.png");
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error converting div to image:", error);
  //   }
  // };
  const onCapture = () => {
    html2canvas(document.getElementById('imageBox') as HTMLElement).then(
      (canvas) => {
        onSaveAs(canvas.toDataURL('image/png'), 'imgbox.png');
      }
    );
  };
  const onSaveAs = (uri :string, filename: string) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div className="App">
      <header className="App-header">
        <title>아바타만들기</title>
        <h1>Avata Maker</h1>
      </header>
      <body>

        <div className='set_div' id='imageBox'>
        <canvas width="180" height="260"></canvas>
          <img className='set' id='clothImg' src={'img/cloth/cloth' + i + '.png'}></img>
          <img className='set' id='faceImg' src={'img/face/face' + i + '.png'}></img>
          <img className='set' id='hairImg' src={'img/hair/hair' + i + '.png'}></img>
          <img className='set' id='eyesImg' src={'img/eyes/eyes' + i + '.png'}></img>
          <img className='set' id='mouthImg' src={'img/mouth/mouth' + i + '.png'}></img>
          {/* <img className='set' src='img/hair/hair1.png'></img>
          <img className='set' src='img/eyes/eyes1.png'></img>
          <img className='set' src='img/mouth/mouth1.png'></img> */}
          <img className='set' id='accImg' src={'./img/acc/acc' + i + '.png'}></img>
        </div>
        <Accbtn />
        <Facebtn />
        <Clothbtn />
        <Hairbtn />
        <Eyesbtn />
        <Mouthbtn />
        <button onClick={onCapture}>다운로드</button>
      </body>

      {/* <script>

        let accBtn = document.getElementById("accImg");
        accBtn.setAttribute('src', 'img/acc/acc' + i + '.png');
        document.querySelector(".accBtn").addEventListener('click', accbtn(i));
      </script> */}
    </div>
  );
}



export default App;

