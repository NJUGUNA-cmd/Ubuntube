import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
function App() {
  return (
    <div className="App">
      <h1>Video player</h1>
      <div class="player-wrapper" style={{maxWidth:'640px', margin:'0 auto'}}>
       <ReactPlayer
       url="https://www.youtube.com/watch?v=SANzA-vhQXE"
       controls
       width="100%"
       />
      </div>
    </div>
  );
}

export default App;
