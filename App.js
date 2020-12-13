import React from "react";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Player from './components/Player';
import PlayerDetail from './components/PlayerDetails';
import PlayerControls from './components/PlayerControls';
import './styles/app.scss';


function App() {

const [songs, setSongs] = useState([
  {
   title: "Beaver Creek",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Aso, Middle School, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: true,
  },
  {
   title: "Daylight",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Aiguille",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
   title: "Keep Going",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Swørn",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
   title: "Nightfall",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Aiguille",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
   title: "Reflection",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Swørn",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
   title: "Under the City Stars",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Aso, Middle School, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
  {
   title: "Hidden Structure",
    cover: 
    "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
    artist: "Leavv, Flitz&Suppe",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9915",
    color: ["#D5E6A6", "#D49266"],
    id: uuidv4(),
    active: false,
  }
]);

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div>
      <Player song={songs[currentSongIndex]} nextSong={[nextSongIndex]} />
    </div>
  )
};

export default App;