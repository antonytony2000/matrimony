import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Reg from "./Reg";
import Home from "./Home";
import Profile from "./Profile";
export default function Navigation() 
{
    return<>
        {
            <BrowserRouter>
                <Routes>
                    <Route element={<App />} path="/"></Route>
                    <Route element={<Login />} path="/Login"></Route>
                    <Route element={<Reg />} path="/Reg"></Route>
                    <Route element={<Home />} path="/Home"></Route>
                    <Route element={<Profile/>} path="/Profile"></Route>
                </Routes>
            </BrowserRouter>
        }
    </>
    
   
}