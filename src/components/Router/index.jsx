import React from "react";
import { About } from "./About";
import { Home } from "./Home";
import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
export const index = () => {
  return (
    <>
      <BrowserRouter>
       <Link to="/">Home</Link> <br />
        <Link to="/about">about</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
