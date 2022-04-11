import React, { useState } from "react";
import '../style/css/header.css'
import { Nav, NavDropdown, Navbar, Container, Offcanvas, } from "react-bootstrap";
import { Link } from "react-scroll";



export const Header = () => {


    return (
        <div className="header">
       

            <Navbar expand={false} className='header'>
                <Container fluid>
                    <Navbar.Brand>

                        <Nav.Link href="/" className="logo">logo</Nav.Link>

                    </Navbar.Brand>

                    <Navbar.Toggle className="toggle" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >

                        {/* ZOSTO OVDE NE ME PRENASOCUVA na naslovna */}
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"  >
                                <Nav.Link href="/">LOGO</Nav.Link >
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav >
                                <NavDropdown title="Who We Are" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="/#about"> <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        About us
                                    </Link></NavDropdown.Item>
                                    <NavDropdown.Item href="/missionAndVision">Mission</NavDropdown.Item>
                                    <NavDropdown.Item href="/missionAndVision">Vision</NavDropdown.Item>

                                </NavDropdown>

                                <Nav.Link className="navbar"  href="/awards">Awards/Certificates</Nav.Link>
                                {/* <Nav.Link  className="navbar" href="/awards">Certificates</Nav.Link> */}
                                {/* <Nav.Link  className="navbar" href="/">Our News</Nav.Link> */}
                                <Nav.Link className="navbar" href="/">ContactUs</Nav.Link>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>

    )
}






