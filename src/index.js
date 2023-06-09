import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-pro/css/all.css"

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import PostMaker from "./Pages/PostMaker";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path="home" element={<Home/>}/>
                    <Route path="recipes" element={<Recipes/>}/>
                    <Route path="postmaker" element={<PostMaker/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>)



