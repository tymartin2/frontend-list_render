//Modules and Dependencies
  import './App.css';
  import { Container } from 'react-bootstrap'; 
  import TableDisplay from './pages/TableDisplay'; 

//Build Entry Point
  export default function App() {
    return (
      <Container>
          <TableDisplay />
      </Container>
    );
  }

