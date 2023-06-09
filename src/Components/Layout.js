import React from "react";
import { Outlet, Link } from "react-router-dom"

import { Container, Nav, NavDropdown, Navbar, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Layout extends React.Component {

    render(){

        return(
       
            <>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Cook's Cranny <i className="far fa-hat-chef"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to="/recipes"><Nav.Link>Recipes</Nav.Link></LinkContainer>
                                <LinkContainer to="/postmaker"><Nav.Link>Post Maker</Nav.Link></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                <Container>
                    <Row>
                        <Col lg={11}><Outlet /></Col>
                        <Col lg={1}>
                            <h3>Recent Posts:</h3>
                        </Col>
                    </Row>
                </Container>
                    
                    <footer className="p-2">
                        <section className="d-flex justify-content-center border-bottom">
                            <div className="me-5 d-none d-lg-block">
                                <span>Social Media Links</span>
                            </div>
                            <div>
                                <a href="" className="me-4">
                                    <i className="fab fa-youtube fa-lg"></i>
                                </a>
                                <a href="" className="me-4">
                                    <i className="fab fa-facebook fa-lg"></i>
                                </a>
                                <a href="" className="me-4">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </a>
                                <a href="" className="me-4">
                                    <i className="fab fa-instagram fa-lg"></i>
                                </a>

                            </div>

                        </section>
                    </footer>
                    
                </Container>

                
            </>
            )

    }
    
}

export default Layout;

