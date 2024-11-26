import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class MyNav extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid={this.props.isFluid}>
          <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <NavDropdown title="Generi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#">History</NavDropdown.Item>
              <NavDropdown.Item href="#">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
              <Nav.Link href="#" className="disable">Amministrazione</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;