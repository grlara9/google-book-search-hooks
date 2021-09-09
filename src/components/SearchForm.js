import React, {useState} from 'react'

 const SearchForm = (props) => {
        const [state, setState] = useState({
            title:'',
            author:''
        })

    const onChange = (e)=>{
        const { name, value} = e.target;
        setState({...state, [name]:value})
    }
  console.log("this is state", state)
    return (
        <div>
            <form>
                <input type="text" 
                onChange={onChange}  
                value={state.title} 
                name="title" 
                placeholder="enter book name"/>

                <input type="text" 
                onChange={onChange}  
                value={state.author} 
                name="author" 
                placeholder="enter author"/>


            </form>
        </div>
    )
}
export default SearchForm