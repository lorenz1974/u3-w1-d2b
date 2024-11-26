import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

class MyNav extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' data-bs-theme='dark'>
        <Container fluid={this.props.isFluid}>
          <Navbar.Brand href='#home'>{this.props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#'>Home</Nav.Link>
              <NavDropdown title='Generi' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  onClick={() => this.props.changeState('fantasy')}
                >
                  Fantasy
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.props.changeState('history')}
                >
                  History
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.props.changeState('horror')}
                >
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.props.changeState('romance')}
                >
                  Romance
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.props.changeState('scifi')}
                >
                  Sci-Fi
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href='#' className='d-none'>
                Amministrazione
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNav
