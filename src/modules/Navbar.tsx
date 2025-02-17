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
      className={`${navbarBg} mx-auto mt-2`}
      variant="light"
      style={{
        width: "70%",
        borderRadius: "50px",
      }}
    >
      <Container>
        <Navbar.Brand className="ms-5 me-5" href="#">
          <Logo /> SecuroSphere
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="ms-5">
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">Features</Nav.Link>
            <Nav.Link href="/about">Solutions</Nav.Link>
            <Nav.Link href="/about">How to Start</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="ms-auto ">
          <Nav>
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
