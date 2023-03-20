import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar_ () {
   return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Travel Desitnation</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/" >Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
   ) 
}
export default Navbar_;