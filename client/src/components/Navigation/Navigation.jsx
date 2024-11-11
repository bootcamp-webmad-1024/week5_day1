import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <div className="Navigation mb-5">
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#home">Coasters App!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={Link}>Inicio</Nav.Link>
                            <Nav.Link to="/galeria" as={Link}>Galería</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Navigation