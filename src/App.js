import React, {useState} from 'react'
import useFetchJobs from './components/Reducer'
import  SearchForm from './components/SearchForm'
import { Container } from 'react-bootstrap'
import Books from './components/Books'
import BookPagination from './components/BookPagination'
import './App.css'
function App(){
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  
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
      <BookPagination page={page} setPage={setPage} hasNextPage={true}/>
      {loading && <h1>Loading...</h1>}
      {books.map(book => {
        return <Books key={book.id} book={book} />
      })}
      <BookPagination page={page} setPage={setPage} hasNextPage={true}/>
      </Container>
  )
}

export default App