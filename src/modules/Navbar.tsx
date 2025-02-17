import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");
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

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${navbarBg} mx-auto `}
      variant="light"
      style={{
        width: navbarBg === "transparent" ? "100%" : "100%",
        borderRadius: navbarBg === "transparent" ? "50px" : "50px",
        transition: "all 0.3s ease",
      }}
    >
      <Container fluid>
        <Navbar.Brand className="ms-1 me-5" href="/">
          <Logo /> SecuroSphere
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="me-5">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">Features</Nav.Link>
            <Nav.Link href="/solutions">Solutions</Nav.Link>
            <Nav.Link href="/start">How to Start</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://app.securosphere.in/login">Login</Nav.Link>
            <Nav.Link href="https://app.securosphere.in/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
