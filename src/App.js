import React,{useState, useEffect} from 'react'
import './App.css'
import SongList from './containers/SongList'

function App() {

  // States
  const [songList, setSongList] = useState([])
  const [urlList, setUrlList] = useState(
      [
      { url: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json' }
      ]
  )

  // UseEffect
  useEffect( () => {
      loadSongs();
  }, [])

  // Fetch song from API
  const loadSongs = function(){
      fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(response => response.json())
      .then(data => setSongList(data.feed.entry))
      .catch(error => console.error);
      }

  return (
    <>
      <h1> UK Top 20 songs!!!!! </h1>
      <hr/>
      <SongList songList = {songList}/>
    </>
  );
}

export default App
