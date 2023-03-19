import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./components/Homepage"
import {GreetingsPage} from "./components/GreetingsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/greetings" element={<GreetingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    
  );
}

export default App;