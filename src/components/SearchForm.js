import React from 'react'


 const SearchForm = ({params, onParamsChange}) => {
    console.log("this is ",params)
    
   return (
        <div>
            <form>
                <input type="text" 
                value={params.title} 
                name="title" 
                onChange={onParamsChange}  
                placeholder="enter book name"/>

            </form>
        </div>
    )
}
export default SearchForm