import reducer from './components/Reducer';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {

  const {books, loading, error} = reducer()
  return (
   <Container>
     {loading && <h1>Loading</h1>}
     {error &&<h1> Error. Try refreshing</h1>}
      <h1>{books.length}</h1>
   </Container>
  );
}

export default App;
