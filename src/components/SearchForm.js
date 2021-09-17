import React, {useReducer} from 'react'


 const SearchForm = ({params, onParamsChange}) => {
     
    
   return (
        <div>
            <form>
                <input type="text" 
                name="title" 
                value={params.title} 
                onChange={onParamsChange}  
                placeholder="enter book name"/>

            </form>
        </div>
    )
}
export default SearchForm