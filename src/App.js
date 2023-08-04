import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import VotePage from './Pages/Vote';
import CatPage1 from './Pages/CatPage1';

function App() {
 
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/vote" element={ <VotePage/> } />
        <Route path="/royaute" element={ <CatPage1/> } />
      
      </Routes>
    </div>
  )
}

export default App;
