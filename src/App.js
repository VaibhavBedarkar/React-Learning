import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDemo from './component/EventDemo';
import ParentComp from './component/ParentComp';
import { Routes, Route, Link } from 'react-router-dom';
import States from './component/States';
import VideoPlayerExample from './component/VideoPlayerExample';
import AudioDemo from './component/AudioDemo';
import Calculator from './component/Calculator';
function App() {
  return (
    <>    
    <nav>
      <Link to="/" className="nav-item">Events</Link>
        <Link to="/parentchild" className="nav-item">Parent-Child Data Flow</Link>
        <Link to="/states" className="nav-item">States</Link>
        <Link to="/video" className="nav-item">Video</Link>
        <Link to="/sound" className="nav-item">Sound</Link>
        <Link to="/calculator" className="nav-item">Calculator</Link>
    </nav>
      <Routes> 
        <Route path="/" element={<EventDemo/>}></Route>
        <Route path="/parentchild" element={<ParentComp/>}></Route>
        <Route path="/states" element={<States/>}></Route>
        <Route path="/video" element={<VideoPlayerExample/>}></Route>
        <Route path="/sound" element={<AudioDemo/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>   
    </>   
  );
}


export default App;
