import "./student-tile.css"

function StudentTile (name, key) {
    return (
        <>
            <div className="student-tile student-name-tile" key={key}>This is {name}'s student tile
                <div className="button student-tile-toggle">button
                    <div className=" button student-tile-toggle-indicator"></div>
                </div>
            </div>
        </>
    )
}

export default StudentTile