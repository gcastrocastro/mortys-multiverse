import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import songList from './songList.js';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [selectedSong, setSelectedSong] = useState(songList[0]);

  const handleSongChange = (event) => {
    const selectedSongUrl = event.target.value;
    const selectedSong = songList.find((song) => song.url === selectedSongUrl);

    setSelectedSong(selectedSong);
  };

  return (
    <div className="audio-container">
    <h2> Listen to your favorite <br></br> Rick and Morty songs! </h2>
      <select onChange={handleSongChange}>
        {songList.map((song) => (
          <option key={song.url} value={song.url}>
            {song.title}
          </option>
        ))}
      </select>
      <ReactAudioPlayer src={selectedSong.url} controls />
    </div>
  );
};