import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Donate from './components/Donate';
function App() {
  return (
    <div> 
        <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
