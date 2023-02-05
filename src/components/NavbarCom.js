import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../images/Asan-1.png";
import { MenuOutlined } from "@ant-design/icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SocialMediaObjects from "./SocialMediaObjects";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarCom({ classs }) {


  return (
    <div className={classs} id="headerBack" >
      <Navbar bg="transparent" className="container" expand="md">
        <Navbar.Brand href="/home" className="App-logo">
          <img src={logo} width={"84px"} alt={"Asan logo"} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          data-bs-target="#responsive-navbar-nav"
        >
          <button style={{ border: "none", background: "none" }}>
            <MenuOutlined style={{ color: "white" }} />
          </button>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto facc">
            <Nav.Link href="/home">ANA SƏHİFƏ</Nav.Link>

            <NavDropdown
              title="HAQQIMIZDA"
              renderMenuOnMount={true}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className={classs} href={'/ourteam'}>
                KOMANDAMIZ
              </NavDropdown.Item>
              <NavDropdown.Item className={classs} href="#action/3.2">
                TƏRƏFDAŞLAR
              </NavDropdown.Item>
              <NavDropdown.Item className={classs} href="#action/3.3">
                STRUKTUR
              </NavDropdown.Item>
              <NavDropdown.Item className={classs} href="#action/3.3">
                MÜKAFATLAR
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={"/projects"}>LAYİHƏLƏR</Nav.Link>
            <Nav.Link href={"/news"}>XƏBƏRLƏR</Nav.Link>
            <Nav.Link href={"/media"}>MEDİA</Nav.Link>
            <Nav.Link href={"/info"}>ƏLAQƏ</Nav.Link>
          </Nav>
          <SocialMediaObjects />
          <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', lineHeight: '12px', marginLeft: '25px'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarCom;
