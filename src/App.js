import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/features' element={<Features/>} />
      </Routes>
    </div>
  );
}

export default App;
