import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/Navbar';
import EventDemo from './component/EventDemo';
import ParentComp from './component/ParentComp';
import StateHooksConcept from './component/StateHooksConcept';
import RefHookConcepts from './component/RefHookConcept';
function App() {
  return (
    <>
    
    <NavigationBar/>
    <h1>Concept: Events</h1>
    <EventDemo/>
    <h1>Concept: Parent-Child Data Flow</h1>
    <ParentComp/>
    <h1>Concept: States</h1>
    <h4>useState Hook Concept</h4>
    <StateHooksConcept/>
    <h4>useRef Hook Concept</h4>
    <RefHookConcepts/>
    </>   
  );
}

export default App;
