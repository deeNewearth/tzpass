
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const expand ="xl";

export function MainNav(){
    return <Navbar  bg="light" expand={expand} className="mb-3">
    <Container fluid>
      <Navbar.Brand href="#">tzAccess</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            tzAccess
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown
              title="Creaters"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/creator">
                Sign up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>;
}