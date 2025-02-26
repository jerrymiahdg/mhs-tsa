import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <div className="font-newsreader">
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="resources" element={<Resources />} />
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
