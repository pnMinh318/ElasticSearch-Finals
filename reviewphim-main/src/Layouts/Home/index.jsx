import React, { useState } from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home({ handleSearch }) {
    const [input, setInput] = useState('');
    const onSearch = () => {
        handleSearch(input);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid style={{ display: 'flex', flexDirection: 'column' }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                    Ottel Review
                </Link>


                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action2">PHIM MỚI</Nav.Link>
                        <Nav.Link href="#action2">PHIM LẺ</Nav.Link>
                        <Nav.Link href="#action2">PHIM BỘ</Nav.Link>
                        <Nav.Link href="#action2">PHIM HOẠT HÌNH</Nav.Link>
                        <Nav.Link href="#action2"> PHIM CHIẾU RẠP</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
                <InputGroup className="mb-3" style={{ with: '70%' }}>
                    <FormControl
                        placeholder="Tìm kiếm phim"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <InputGroup.Text
                        onClick={onSearch}
                        id="basic-addon2">Tìm kiếm</InputGroup.Text>
                </InputGroup>
            </Container>
        </Navbar>
    );
}

export default Home;