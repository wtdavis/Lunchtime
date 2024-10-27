import { useState } from "react"
import "./app.css"
import Header from "./Header/Header.jsx"
import TileList from "./TileList/TileList.jsx"

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