import * as React from 'react';
import "./viewbox.css";

import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

export default function TransLateBox({ info , langdt , langto, text}) {
  if (!info || !info.txtChange) {
    // Handle the case where info or info.txtChange is undefined
    return null; // or render a placeholder or loading state
  }

  return (
    <div className='viewcards' style={{display:"flex" }}>

      <div className='card1'>
        <div className='cardstart'>
          <h3>What's on your mind</h3>
          <p>With automatic language detection,<br /> you can effortlessly translate text <br /> into your preferred language. Just <br /> enter your text, and our tool <br /> will intelligently identify your <br /> language and seamlessly <br /> translate it into the  language <br /> of your choice. </p>
        </div>
        <div className='cardend'></div>
      </div>

      <div className='card2'>
        <div className='cardstart'>
        <h2><b>Translation</b></h2>
        <p id='from' >Detected Lang</p>
        <span id='To' className='spanLang'><u><b>{langdt.fromLang}</b></u></span>
       <br /> <br /><p><SwapVerticalCircleIcon/></p>
        <p  id='from'>To</p>
        <span id='To' className='spanLang'><u><b>{info.isSubmitted ? `${langto.toLang}` : langto.toLang || JSON.stringify(langto)}</b></u></span> 
        </div>
        </div>

        <div className='card3'>
          <div className='textEnt'>
            <div className='oldText'>
              <p>{text.text}</p>
            </div>
            <div> <span id='IconVert'><SwapVerticalCircleIcon/></span><hr id='hr'/></div>
            <div className='newText'>{info.txtChange}</div>
          </div>
        </div>
</div>
  );
}
