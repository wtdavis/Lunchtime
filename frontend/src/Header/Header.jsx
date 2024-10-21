import { useState } from "react"
import "./header.css"

function Header () {
    return (
        <>
            <div className="header-container header">
                <h2 className="header-title">Food!Food!Food!</h2>
                    <div className="header-button-container button-container">
                    <div className="front-page-button header-button button">
                        <p>
                        front page!
                        </p>
                    </div>
                    <div className="admin-page-button header-button button">admin page()</div>
                    <div className="logio-button header-button button">Login/Logout</div>
                </div>
            </div>
        </>
    )
}

export default Header