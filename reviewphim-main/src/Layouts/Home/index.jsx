import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Home(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Ottel Review</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action2">PHIM TRONG THÁNG</Nav.Link>
                        <Nav.Link href="#action2">PHIM HAY</Nav.Link>
                        <Nav.Link href="#action2">NHÂN VẬT</Nav.Link>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Home;