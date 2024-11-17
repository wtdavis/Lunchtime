import { useState } from "react"


function SearchBar () {
    const [searchText, setSearchText] = useState()

    return (
        <>
            <form>
                <input className="search-input" type="text"/>
            </form>
        </>

    )



}

export default SearchBar