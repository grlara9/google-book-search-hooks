import React, {useState} from 'react'

 const SearchForm = ({params, onChange}) => {

  
    return (
        <div>
            <form>
                <input type="text" onChange={onChange}  value={params.title} name="title" placeholder="enter book name"/>
                <input type="text" onChange={onChange}  value={params.author} name="author" placeholder="enter author"/>
            </form>
        </div>
    )
}
export default SearchForm