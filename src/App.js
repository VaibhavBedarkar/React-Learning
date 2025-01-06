import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDemo from './component/EventDemo';
import ParentComp from './component/ParentComp';
import { Routes, Route, Link } from 'react-router-dom';
import States from './component/States';
function App() {
  return (
    <>    
    <nav>
      <Link to="/" className="nav-item">Events</Link>
        <Link to="/parentchild" className="nav-item">Parent-Child Data Flow</Link>
        <Link to="/states" className="nav-item">States</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<EventDemo/>}></Route>
        <Route path="/parentchild" element={<ParentComp/>}></Route>
        <Route path="/states" element={<States/>}></Route>
      </Routes>   
    </>   
  );
}


export default App;
