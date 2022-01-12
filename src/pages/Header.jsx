import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { selectMovie } from "../redux/reducer/moviesSlice";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Navbar bg="black" variant="black" className="py-0">
          <Container>
            <Nav className="mx-auto">
              <Nav.Link
                onClick={() => dispatch(selectMovie(null))}
                as={Link}
                to="/"
                className="text-white"
              >
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="text-white">
                NASA Image Search
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </BrowserRouter>
    </>
  );
}
