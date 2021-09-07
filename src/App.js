import {useState} from 'react'
import useFetchBooks from './components/Reducer';
import { Container } from 'react-bootstrap';
import Books from './components/Books'
import SearchForm  from './components/SearchForm';
import './App.css';


function App() {
  const [params, setParams] =useState({})
  const [page, setPage] = useState(1)
  const {books, loading, error} = useFetchBooks()
  
  const onChange =(e)=>{
    const params = e.target.name;
    const value = e.target.value
    console.log("esto escribo" , value)
  }

  return (
   <Container>
     <SearchForm onChange={onChange} params={params}/>
     {loading && <h1>Loading...</h1>}
     {error && <h1> Error. Try refreshing</h1>}
      {books.map(book =>{
       return <Books key={book.id} book={book}/>
      })}
     
   </Container>
  );
}

export default App;
