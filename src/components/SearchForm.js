import React, {useState} from 'react'

 const SearchForm = () => {

    const [text, setText] = useState('')

    const onChange=(e)=>{
        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
    }
    console.log("user input", text)
    return (
        <div>
            <form handleSubmit={handleSubmit}>
                <input type="text" onChange={onChange} placeholder="enter book"/>

            </form>
        </div>
    )
}
export default SearchForm