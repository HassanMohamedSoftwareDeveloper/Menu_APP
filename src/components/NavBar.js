import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useRef } from "react";

function NavBar({ search }) {
  const searchValue = useRef();
  const onSearch = () => {
    search(searchValue.current.value);
    searchValue.current.value = "";
  };
  return (
    <Row>
      <Col>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <div className="brand-color">مطعم جديد</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  ref={searchValue}
                  type="text"
                  placeholder="..ابحث"
                  className="mx-2"
                />
                <button type="button" className="btn-search" onClick={onSearch}>
                  بحث
                </button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavBar;
