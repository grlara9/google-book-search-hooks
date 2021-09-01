import React, {useState} from 'react'

 const SearchForm = () => {

    const [text, setText] = useState('')

    const onChange=(e)=>{
        setText(e.target.value)

    }

    console.log("this is the user input", text)
    return (
        <div>
            <form>
                <input type="text" onChange={onChange} placeholder="enter book"/>

            </form>
        </div>
    )
}
export default SearchForm