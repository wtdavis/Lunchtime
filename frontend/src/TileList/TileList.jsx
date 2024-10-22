import { useEffect, useState } from "react"
import StudentTile from "../StudentTile/StudentTile"

function TileList () {
    
    const [studentList, setStudentList] = useState(["john", "james", "sarah", "marie"])
    
    let tileList = function populateStudentList () {
        console.log(studentList)
        let listArr = []
        for (let i=0; i<studentList.length; i++) {
            listArr.push(StudentTile(studentList[i], i))
        }
        return listArr
    }

    console.log(tileList())
    

    return (
        <>
            <div className="tile-list-container">
                {tileList()}
            </div>
        </>
    )
}

export default TileList