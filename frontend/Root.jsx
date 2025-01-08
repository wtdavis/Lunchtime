import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from 'react-router';
import App from "./src/App.jsx"


    function Test () {
        return (
            <>
            <h1>test component</h1>
            </>
        )
    }

    let ele = document.getElementById("root")

    let root = createRoot(ele)

    root.render(
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<Admin/>} />
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
