import { useState } from "react"
import Header from "./Header/Header.jsx"
import TileList from "./TileList/TileList.jsx"
import "./app.css"

function App () {

    let classList = {}

    const [highlights, setHighlights] = useState({classList})

    return (
        <>
            <div className="body">
                <Header/>
                <TileList/>
            </div>
        </>
    )
}

export default App