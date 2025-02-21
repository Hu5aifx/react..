import logo from './logo.svg';
import './App.css';
import video from './assets/particles.mp4';

function App() {
  return (
    <div>
      <video  src={video} muted autoPlay loop />
      <h2 >
        <span>P</span>article Di
        <span >st</span>ortion Effects
      </h2>
      </div>
  );
}

export default App;
