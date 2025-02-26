import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="font-newsreader">
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route
              path="/*"
              element={
                <div className="flex justify-center p-10 text-4xl">
                  Page Not Found.
                </div>
              }
            />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
