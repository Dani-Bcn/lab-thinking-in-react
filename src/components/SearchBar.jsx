import React from 'react'

const SearchBar = props => {

    const handleChange = (e) => {
        console.log(e.target.checked)
        const { name, value, checked } = e.target
        name === "search" ? props.search(value) : props.updateCheckBox(checked)
    }
    return (  
        <div> 
        <br />
            <h5 style={{textAlign:"center"}}>Search</h5>   
            <form>             
                <input name="search" type="text"  placeholder="Search" value={props.searchInState} onChange={handleChange} /> 
                <br />
                <input type="checkbox" onChange={handleChange}  />
            </form>
        </div>
    )
}

export default SearchBar