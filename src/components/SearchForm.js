import React, {useState} from 'react'

 const SearchForm = ({params, onChange}) => {

  
    return (
        <div>
            <form>
                <input type="text" onChange={onChange}  value={params.title} name="title" placeholder="enter book name"/>
                
            </form>
        </div>
    )
}
export default SearchForm