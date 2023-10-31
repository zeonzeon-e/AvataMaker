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

import { Button } from "@chakra-ui/react"

var i = 6;

function App() {
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
        <div className='setDiv'>
        <div className='set_div' id='imageBox'>
        <canvas width="180" height="230"></canvas>
          <img className='set' id='clothImg' src={'cloth/cloth' + i + '.png'} />
          <img className='set' id='faceImg' src={'face/face' + i + '.png'} />
          <img className='set' id='hairImg' src={'hair/hair' + i + '.png'}></img>
          <img className='set' id='eyesImg' src={'eyes/eyes' + i + '.png'}></img>
          <img className='set' id='mouthImg' src={'mouth/mouth' + i + '.png'}></img>
          <img className='set' id='accImg' src={'acc/acc' + i + '.png'}></img>
          <input className='set_input'type='text' autoFocus placeholder='출력하고 싶은 말을 쓰세요!'></input>
        </div>
        </div>
        <div className='btn_div'>
          <Accbtn />
          <Facebtn />
          <Clothbtn />
          <Hairbtn />
          <Eyesbtn />
          <Mouthbtn />
          <Button bg='#030D45' color='#ffffff' variant='solid' onClick={onCapture}>DOWNLOAD</Button>
        </div>
        <div className='copy'>
          <p>Made by jihyeon Lee(MOTIV)</p>
          <p>Illustrations by DrawKit</p>
        </div>
      </body>
    </div>
  );
}



export default App;

