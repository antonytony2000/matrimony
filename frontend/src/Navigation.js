import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Reg from "./Reg";
import Inside from "./Inside";
import Final from "./Final";
export default function Navigation() 
{
    return<>
        {
            <BrowserRouter>
                <Routes>
                    <Route element={<App />} path="/"></Route>
                    <Route element={<Login />} path="/Login"></Route>
                    <Route element={<Reg />} path="/Reg"></Route>
                    <Route element={<Inside />} path="/Inside"></Route>
                    <Route element={<Final/>} path="/Final"></Route>
                </Routes>
            </BrowserRouter>
        }
    </>
    
   
}