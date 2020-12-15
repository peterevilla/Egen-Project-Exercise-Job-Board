import React, {useState} from 'react'

const SearchBar = () => {
    const [ params, setParams] = useState({description: "", location: "", type: ""})
    return (
        <form>
            <input></input>
            <input></input>
            <input></input>
            
        </form>
    )
}

export default SearchBar
