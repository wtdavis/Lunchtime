import "./student-tile.css"

function StudentTile (name, key) {

    const [toggleStatus, setToggleStatus] = useState("student-tile-toggle")

    function handleToggle () {
        if (toggleStatus==)
    }

    return (
        <>
            <div className="student-tile student-name-tile" key={key}>
                <p className="student-tile-name student-tile-element">This is {name}'s student tile</p>
                <div className="button student-tile-toggle student-tile-element" onClick={handleToggle}>button
                    <div className=" button student-tile-toggle-indicator"></div>
                </div>
            </div>
        </>
    )
}

export default StudentTile