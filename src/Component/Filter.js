import React from 'react'

const Filter = ({setSearch,setRating}) => {
    return (
        <div>
            <input typpe="text" placeholder="search your movie"  size="50" onChange={(e)=>
            setSearch(e.target.value)
            } /> 
            
        </div>
    )
}

export default Filter ;
