import React, {useState} from 'react'

 const SearchForm = (props) => {

    const [text, setText] = useState('')

    const onChange=(e)=>{
        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        props.search(text)
    }
    console.log("user input", text)
    return (
        <div>
            <form handleSubmit={handleSubmit}>
                <input type="text" onChange={onChange} placeholder="enter book name"/>
                <input type="text" onChange={onChange} placeholder="enter author"/>
            </form>
        </div>
    )
}
export default SearchForm