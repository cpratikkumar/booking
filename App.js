import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </section>
  );
}

export default App;
