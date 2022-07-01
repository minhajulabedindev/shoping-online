import React from "react";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarScroll = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  return (
    <div>
      <Container style={{ sticky: "top" }} bg="light" fluid>
        <Navbar expand="lg ">
          <Container>
            <Navbar.Brand href="#">SHOP ONLINE</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link as={Link} style={{ width: "50px", fontWeight: "600px" }} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} style={{ width: "50px", fontWeight: "600px ", margin: "0px 10px 0px 0px" }} to="/success">
                  product
                </Nav.Link>
                <Nav.Link as={Link} style={{ width: "50px", fontWeight: "600px ", margin: "0px 10px 0px 0px" }} to="/blog">
                  Blog
                </Nav.Link>
              </Nav>
              <Nav.Link as={Link} style={{ width: "50px", fontWeight: "600px ", margin: "0px 10px 0px 0px" }} to="/Cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} style={{ width: "50px", fontWeight: "600px" }} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} style={{ width: "50px", fontWeight: "600px" }} to="/register">
                Register
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarScroll;
