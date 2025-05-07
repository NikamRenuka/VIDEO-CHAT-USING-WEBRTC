
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './components/Landing';
import { Room } from './components/Room';
import './app.css';  
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Omegle Clone</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/room" element={<Room name={""} localAudioTrack={null} localVideoTrack={null}/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
