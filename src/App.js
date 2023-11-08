
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Saved from './Components/Saved';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/saved" element={<Saved/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
