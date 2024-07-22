import React from "react";
import {NavLink as ReactLink, useNavigate} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  import { useState } from "react";
import Login from "./Login";

const CustomNav=()=>
{
  let navBarCss={
    backgroundColor:'#ffa4a2',

  }

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <>
        <Navbar expand="md" style={navBarCss}>
          <NavbarBrand tag={ReactLink} to="/"><strong>HPCL</strong></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/#">
                  Profile
                </NavLink>
              </NavItem>
              
            </Nav>
            <Nav navbar>


            </Nav>
          </Collapse>
        </Navbar>
      </>
  
    )
}

export default CustomNav