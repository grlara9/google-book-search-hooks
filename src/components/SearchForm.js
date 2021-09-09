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
    
    const handleFormSubmit =(e) =>{
        e.preventDefault();
        console.log("this is state", state)
        props.search(state)
  }
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

                <button type="submit"onClick={handleFormSubmit}>SEARCH</button>
            </form>
        </div>
    )
}
export default SearchForm