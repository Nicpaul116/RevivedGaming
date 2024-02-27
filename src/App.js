import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { Games, Contact, News, Reviews, Gamedetail } from "./containers";

const App = () => {
  const [clickedPart, setClickedPart] = useState(null);

  const handleclick = (partDetails) => {
    setClickedPart(partDetails);
  };
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Games" element={<Games onDivClick={handleclick} />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route
            path="/Gamedetail"
            element={<Gamedetail clickedPart={clickedPart} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
