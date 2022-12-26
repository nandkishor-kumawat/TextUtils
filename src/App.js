import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743'
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar heading="TextUtils" mode={mode} toggleMode={toggleMode}  />
        <Routes>
          <Route path="/" element={<TextForm mode={mode}/>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
