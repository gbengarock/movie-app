import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/"element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
