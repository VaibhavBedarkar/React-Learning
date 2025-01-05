import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/Navbar';
import EventDemo from './component/EventDemo';
import ParentComp from './component/ParentComp';
import StateHooksConcept from './component/StateHooksConcept';
function App() {
  return (
    <>
    
    <NavigationBar/>
    <EventDemo/>
    <ParentComp/>
    <StateHooksConcept/>
    </>   
  );
}

export default App;
