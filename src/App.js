import './App.css';
import React, { useState, useEffect } from "react";
import Card from './card/Card';
import yogaPoses from './yogaPoses';

function App() {
  // fetch data from the API
  // const [yogaPoses, setYogaPoses] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the API
  //   console.log('fetching data');
  //   fetch('https://yoga-api-nzy4.onrender.com/v1/poses')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('data', data);
  //       setYogaPoses(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const max = yogaPoses.length;
  const [index, setIndex] = useState(Math.floor(Math.random() * max));

  function shuffle() {
    setIndex(Math.floor(Math.random() * max));
  }

  console.log('yogoPoses', yogaPoses);
  return (
    <div className="App">
    {yogaPoses.length > 0 ?
      <Card
        imgSource={yogaPoses[index].url_png}
        sanskritName={yogaPoses[index].sanskrit_name_adapted}
        japanesePronounciation={yogaPoses[index].japanese_pronounciation}
        englishName={yogaPoses[index].english_name}
        translation={yogaPoses[index].translation_name}

      /> : <p>Loading...</p>
    }
      <p className="button-gray" onClick={shuffle}>next</p>
    </div>
  );
}

export default App;
