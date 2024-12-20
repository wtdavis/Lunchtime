import { useEffect, useState } from "react"
import "./student-tile.css"

function StudentTile (name, key) {

    const [toggleStatus, setToggleStatus] = useState("unchecked")

    function handleToggle () {
        const toggle = document.getElementById(key)
        if (toggleStatus==="unchecked") {
            console.log("check")
            // toggle.classList.remove("student-tile-toggle")
            toggle.classList.add("student-tile-toggle-checked")
            setToggleStatus("checked")

        } else {
            console.log("uncheck")
            toggle.classList.remove("student-tile-toggle-checked")
            // toggle.classList.add("student-tile-toggle")
            setToggleStatus("unchecked")
        }
    }

    useEffect(()=> {
        
    }, [handleToggle])

    return (
        <>
            <div className="student-tile student-name-tile" key={key}>
                <p className="student-tile-name student-tile-element">This is {name}'s student tile</p>
                <div id={key} className="button student-tile-toggle student-tile-element" onClick={handleToggle}>button
                    <div className=" button student-tile-toggle-indicator"></div>
                </div>
            </div>
        </>
    )
}

export default StudentTile