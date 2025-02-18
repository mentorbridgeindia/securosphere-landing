import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="mb-3">
              <h5 className="mb-0">SecuroSphere</h5>
            </div>
            <p className="mb-0">
              Advanced security solutions for modern enterprises. Protecting
              your digital assets with cutting-edge technology.
            </p>
            <div className="social-links mt-4">
              <a
                href="https://www.linkedin.com/in/securosphere/"
                target="_blank"
                className="me-3 social-link"
              >
                <Linkedin width={24} height={24} />
              </a>
              <a
                href="https://x.com/SecuroSphere"
                target="_blank"
                className="me-3 social-link"
              >
                <Twitter width={24} height={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572485515869"
                target="_blank"
                className="me-3 social-link"
              >
                <Facebook width={24} height={24} />
              </a>
              <a
                href="https://www.instagram.com/securosphereindia/"
                target="_blank"
                className="me-3 social-link instagram"
              >
                <Instagram width={24} height={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCE4dIaHV5yt1ypnMqMLO24Q"
                target="_blank"
                className="me-3 social-link youtube"
              >
                <Youtube width={24} height={24} />
              </a>
              <a
                href="https://github.com/mentorbridgeindia/securosphere"
                target="_blank"
                className="social-link github"
              >
                <Github width={24} height={24} />
              </a>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">Product</h6>
            <Nav className="flex-column">
              <Nav.Link href="#features" className="footer-link">
                Features
              </Nav.Link>
              <Nav.Link href="#usecase" className="footer-link">
                Use Cases
              </Nav.Link>
              <Nav.Link href="#solutions" className="footer-link">
                Solutions
              </Nav.Link>
              <Nav.Link href="#api" className="footer-link">
                API
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">Company</h6>
            <Nav className="flex-column">
              <Nav.Link href="#about" className="footer-link">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="footer-link">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col md={12} className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} SecuroSphere. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
