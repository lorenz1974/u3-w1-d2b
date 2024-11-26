import Nav from 'react-bootstrap/Nav';

function MyFooter() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="#">
        <Nav.Item>
          <Nav.Link href="#">Chi siamo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Dove Siamo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Contatti</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link> */}
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">My Bookshop &copy;</p>
    </>
  );
}

export default MyFooter;