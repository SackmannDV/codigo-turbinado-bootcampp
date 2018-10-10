import React, {Component} from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

// HTML

const navegadorHTML = (
    <div>
        <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <img alt="brand" src="http://i67.tinypic.com/2a9co7n.jpg"></img>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer exact to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/hoteles/lista">
                    <NavItem>Ver Hoteles</NavItem>
                </LinkContainer>
                <LinkContainer to="/hoteles/nuevo">
                    <NavItem>Agregar Hotel</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="https://github.com/SackmannDV/">GitHub</NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
);    

// Render && export

class Navegador extends Component {
    render() {return(navegadorHTML)}
}

export default Navegador;