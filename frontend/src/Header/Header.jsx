import { useState } from "react"
import HeaderNav from "./HeaderNav.jsx"
import "./header.css"
import SearchBar from "../SearchBar/SearchBar.jsx"

function Header () {
    return (
        <>
            <div className="header-container header">
                <h2 className="header-title">Food!Food!Food!</h2>
                <HeaderNav/>
                <SearchBar/>
                <SearchBar/>
                <SearchBar/>


            </div>
        </>
    )
}

export default Header