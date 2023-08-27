import './Card.css';
import React, { useState } from "react";

function Card(props) {
  console.log('props', props);
  const { imgSource, sanskritName, englishName, translation, japanesePronounciation } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(prevValue => !prevValue);
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner" onClick={handleClick}>
        {/* {!isFlipped && <div className="front" style={{ backgroundImage: `url('images/yoga_poses/Tadasana.png')`, backgroundSize: 'cover' }}> */}
        <div className="flip-card-front" style={{ backgroundImage: `url(${imgSource})`, backgroundSize: 'cover' }}>
        </div>
        <div className="flip-card-back">
          <div className='Sanskrit'>
            <p className="Sanskrit-spelling">{sanskritName}</p>
            <p className="Japanese-pronounciation">{japanesePronounciation}</p>
            <p className='translation'>{translation}</p>
          </div>
          <p className="English">{englishName}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
