import React, {useState} from 'react'
import useFetchJobs from './components/Reducer'
import  SearchForm from './components/SearchForm'
import { Container } from 'react-bootstrap'
import Books from './components/Books'

function App(){
  const [params, setParams] = useState({})
  
  
  const { books, loading, error} = useFetchJobs(params)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

 
  return(
    <Container>
    <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamsChange={handleParamChange} />
      {loading && <h1>Loading...</h1>}
      {books.map(book => {
        return <Books key={book.id} book={book} />
      })}
      </Container>
  )
}

export default App