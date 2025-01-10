import { useState } from "react"

function Admin () {
    const [admin, changeAdmin] = useState(null)

    

    return (
        <>
            <div className="admin-body"> 
                <div className="admin-header">Lunchtime Admin Page</div>
                <div className="db-test" onClick={dbtest}>Db test</div>
            </div>
        </>


    )

}
 
export default Admin