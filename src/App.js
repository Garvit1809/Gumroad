import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import University from './pages/University';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/university' element={<University/>} />
      </Routes>
    </div>
  );
}

export default App;
