import {useState} from 'react'
import useFetchBooks from './components/Reducer';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [params, setParams] =useState({})
  const [page, setPage] = useState(1)
  const {books, loading, error} = useFetchBooks()
  return (

   <Container>
     {loading && <h1>Loading...</h1>}
     {error && <h1> Error. Try refreshing</h1>}
      {books.map(book =>{
        <Books key={book.id} book={book} />
      })}
   </Container>
  );
}

export default App;
