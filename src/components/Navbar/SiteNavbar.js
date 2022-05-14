import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useCart from "./../../hooks/useCart";
import useProducts from "./../../hooks/useProducts";

export default function SiteNavbar() {
    const [products] = useProducts();
    const [cart] = useCart(products);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            to="/"
                            className="text-decoration-none py-2 mx-2"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className="text-decoration-none py-2 mx-2"
                        >
                            Shop
                        </NavLink>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="cart">
                        Cart:{" "}
                        <span className="badge bg-primary">{cart.length}</span>{" "}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
