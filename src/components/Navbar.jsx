import {Container, Navbar,Nav,Row,Col} from  'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar=()=>{
  return(
    <Navbar bg="dark" variant="dark" className="px-4"  >
     
      <Navbar.Brand as={Link} to="/" className="text-white ">Quick Cart</Navbar.Brand>
      <Nav.Link as={Link} to="/" className="text-secondary me-3">Home</Nav.Link>
      <Nav.Link as={Link} to="/" className="text-secondary">Cart</Nav.Link>

        
    
    </Navbar>
  )
}