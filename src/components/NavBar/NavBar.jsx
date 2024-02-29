import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '..//Cart/CartWidget';
import Logo from '../../Logo'
function NavBar() {
return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
        <Navbar.Brand href="#home">GalwaY HomE</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Conocenos</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Tipos de Programas Working Holidays</Nav.Link>
                        <Nav.Link href="#pricing"> <CartWidget /> </Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
)}

export default NavBar;