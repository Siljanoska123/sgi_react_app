import React, { useState } from "react";
import '../style/css/header2.css'
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";




export const Header2 = () => {


    return (
        <div className="header-container">
            <Container>
            <Navbar expand="lg">
                <Container fluid>

                    <Navbar.Brand ><Nav.Link href="/" className="logo">logo</Nav.Link></Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="justify-content-end flex-grow-1 pe-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Who We Are" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/#about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/#mission-vision-header">Mission and Vision</NavDropdown.Item>
                               

                            </NavDropdown>
                            <Nav.Link href="/awards">Awards/Certificates</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>

        </div>

    )
}






