import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Check } from "../assets/check.svg";

const HeroSection: React.FC = () => {
  return (
    <Container
      fluid
      className="text-center bg-light py-5 d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        id="globe"
        className="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7 peekaboo"
      >
        <canvas
          width="700"
          height="654"
          className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"
          style={{ width: "700px", height: "654.594px" }}
        ></canvas>
      </div>
      <Row className="w-100">
        <Col md={12} className="d-flex flex-column align-items-center">
          <Badge
            pill
            bg="light"
            text="dark"
            className="mb-3 px-3 py-2 shadow-sm"
          >
            ✨ Smart AI Features
          </Badge>
          <h1 className="display-4 fw-bold text-dark text-center mt-5 mb-3">
            Protect your web applications <br /> with the elegance of a ninja
          </h1>
          <p className="lead text-muted text-center mt-3 mb-3">
            All-in-one security solution, combining power, flexibility, and
            <br />
            intelligence to make your security journey a whole lot easier
          </p>
          <div className="d-flex justify-content-center gap-5 mt-3 mb-3">
            <div className="bg-light p-2 rounded-circle">
              <Check /> Customizable
            </div>
            <div className="bg-light p-2 rounded-circle">
              <Check /> Top Security
            </div>
            <div className="bg-light p-2 rounded-circle">
              <Check /> AI Driven Analysis
            </div>
          </div>
          <div className="d-flex gap-3 mt-3">
            <Button variant="dark" size="lg" className="px-4 py-2 shadow-sm">
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
