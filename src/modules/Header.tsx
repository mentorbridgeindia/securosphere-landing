import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg("bg-light shadow-lg animate__animated animate__fadeInDown");
      } else {
        setNavbarBg("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${navbarBg} mx-auto ${isDropdownOpen ? "bg-light" : ""}`}
      variant="light"
      style={{
        width: "100%",
        borderRadius: navbarBg === "transparent" ? "50px" : "0",
        transition: "all 0.3s ease",
        zIndex: 1030,
      }}
    >
      <Container fluid>
        <Navbar.Brand className="ms-1 me-5" href="/">
          <Logo /> SecuroSphere
        </Navbar.Brand>
        <NavbarToggle onClick={handleToggle} />
        <NavbarCollapse className="me-5">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-lg-3 mx-md-2 mx-sm-1">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mx-lg-3 mx-md-2 mx-sm-1">
              Features
            </Nav.Link>
            <Nav.Link href="#solutions" className="mx-lg-3 mx-md-2 mx-sm-1">
              Solutions
            </Nav.Link>
            <Nav.Link href="#start" className="mx-lg-3 mx-md-2 mx-sm-1">
              How to Start
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-lg-3 mx-md-2 mx-sm-1">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              href="https://app.securosphere.in/login"
              className="mx-lg-3 mx-md-2 mx-sm-1"
            >
              Login
            </Nav.Link>
            <Nav.Link
              href="https://app.securosphere.in/register"
              className="mx-lg-3 mx-md-2 mx-sm-1"
            >
              Register
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
