import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Link,Switch,Route } from "react-router-dom";

export default function Header() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                NASA Image Search
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* <Switch>
          <Route component={Header} exact path="/" />
          <Route component={Header} exact path="/" />
        </Switch> */}
      </BrowserRouter>
    </>
  );
}
