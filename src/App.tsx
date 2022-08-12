import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Read from "./Pages/Read";
import Write from "./Pages/Write";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
