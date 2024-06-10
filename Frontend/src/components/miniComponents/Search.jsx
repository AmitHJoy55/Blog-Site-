import React, { useContext } from 'react'
import { Context } from '../../main'

function Search() {
  const { keyword, setKeyword } = useContext(Context);
  return (
    <div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." onChange={(e)=>setKeyword(e.target.value)} value={keyword}/>
      </div>
    </div>
  )
}

export default Search
