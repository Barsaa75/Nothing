import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Links from "./pages/Links";
import UserHome from "./pages/UserHome";

export const instance = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:shortUrl" element={<Links />} />
        <Route path="/UserHome/:id" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
