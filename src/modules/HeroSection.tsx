import React from "react";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImage from "../assets/network-protection-1.png";

const HeroSection = () => {
  return (
    <section className="banner mt-5 position-relative overflow-hidden">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            lg={6}
            md={6}
            className="d-flex flex-column align-items-md-start align-items-center justify-content-center text-center text-md-start gap-3"
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Protect your web applications with the elegance of a ninja
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              All-in-one security solution, combining power, flexibility, and
              intelligence to make your security journey a whole lot easier
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="dark"
                  size="lg"
                  className="px-4 py-2 mb-5  shadow-sm"
                  style={{
                    backgroundColor: "#002851",
                    borderRadius: "30px",
                    border: "none",
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} md={6} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Figure className="m-0">
                <Figure.Image
                  src={heroImage}
                  alt="banner"
                  fluid
                  className="hero-image"
                />
              </Figure>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <motion.div
        className="position-absolute"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(0,40,81,0.1)",
          bottom: "10%",
          left: "15%",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
};

export default HeroSection;
