import React from 'react'

function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <div>
        <input type="text" value={searchTerm}  onChange={event => setSearchTerm( event.target.value)}/>
    </div>
  )
}

export default SearchBar