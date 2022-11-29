import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Test from "./components/Test";

function App() {

  const [mode, setMode] = useState('moon');
  const darkMode = () => {
    if (mode === 'moon') {
      setMode('sun');
      document.body.style.background = '#222';
    }
    else {
      setMode('moon');
      document.body.style.background = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar darkMode={darkMode} mode={mode} />
        <Routes>
          <Route exact path='/' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
