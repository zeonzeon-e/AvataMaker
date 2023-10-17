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

var i = 1;

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
        <div className='set_div' id='imageBox'>
        <canvas width="180" height="230"></canvas>
          <img className='set' id='clothImg' src={'cloth/cloth' + i + '.png'} />
          <img className='set' id='faceImg' src={'face/face' + i + '.png'} />
          <img className='set' id='hairImg' src={'hair/hair' + i + '.png'}></img>
          <img className='set' id='eyesImg' src={'eyes/eyes' + i + '.png'}></img>
          <img className='set' id='mouthImg' src={'mouth/mouth' + i + '.png'}></img>
          <img className='set' id='accImg' src={'acc/acc' + i + '.png'}></img>
          <p>응애으니</p>
        </div>
        <div className='btn_div'>
          <Accbtn />
          <Facebtn />
          <Clothbtn />
          <Hairbtn />
          <Eyesbtn />
          <Mouthbtn />
          <button onClick={onCapture}>DOWNLOAD</button>
        </div>
      </body>
    </div>
  );
}



export default App;

