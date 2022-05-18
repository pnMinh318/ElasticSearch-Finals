import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                            Ottel Review
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavDropdown title="Admin" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to="/">
                                        Quản lý bài viết
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to="/add">
                                        Tạo biết viết
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header