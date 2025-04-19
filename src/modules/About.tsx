import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Github, Globe, Linkedin } from "lucide-react";

import Nagapriya from "../assets/nagapriya.jpg";
import Sivasankari from "../assets/Sivasankari.jpg";
import Jeyaraman from "../assets/jeyaraman.jpg";
import Kajalakshmi from "../assets/kaja.jpg";
import Jeyashree from "../assets/jeyashree.jpg";
import Robin from "../assets/robin.jpg";
import Prasanna from "../assets/prasanna.jpg";
import Karpagam from "../assets/Karpagam.jpg";

const teamMembers = [
  {
    name: "Prasanna P",
    role: "Analyst",
    image: Prasanna,
    linkedin: "https://github.com/Prasanna0709 ",
    github: "https://www.linkedin.com/in/p-prasanna-817b9027b/ ",
    portfolio: "https://product-dev-center.vercel.app/prasanna",
  },
  {
    name: "Sivasankari",
    role: "Backend Lead",
    image: Sivasankari,
    linkedin: "https://www.linkedin.com/in/sivasankari-k-3643b8266/ ",
    github: "https://github.com/sivasankari-kannan ",
    portfolio: "https://product-dev-center.vercel.app/Sivasankari",
  },
  {
    name: "Jeyaraman",
    role: "Frontend Lead",
    image: Jeyaraman,
    linkedin: "https://www.linkedin.com/in/jeyaraman23/ ",
    github: "https://github.com/Jagan6923 ",
    portfolio: "https://product-dev-center.vercel.app/jeyaraman",
  },
  {
    name: "Kajalakshmi",
    role: "Frontend",
    image: Kajalakshmi,
    linkedin: "https://www.linkedin.com/in/kajalakshmi/ ",
    github: "https://github.com/Kajalakshmi11 ",
    portfolio: "https://product-dev-center.vercel.app/kajalakshmi",
  },
  {
    name: "Jeyashree",
    role: "Frontend",
    image: Jeyashree,
    linkedin: "http://www.linkedin.com/in/jeya-shree-s/ ",
    github: "https://github.com/JEYASHREESELVAN ",
    portfolio: "https://product-dev-center.vercel.app/Jeyashree",
  },
  {
    name: "Nagapriya",
    role: "Backend",
    image: Nagapriya,
    linkedin: "https://www.linkedin.com/in/nagapriya-sivablan/ ",
    github: "https://github.com/Nagapriya10 ",
    portfolio: "https://product-dev-center.vercel.app/nagapriya",
  },
  {
    name: "Robin",
    role: "Backend",
    image: Robin,
    linkedin: "https://www.linkedin.com/in/robin-jj/ ",
    github: "https://github.com/robinjj ",
    portfolio: "https://www.linkedin.com/in/robin-jj/ ",
  },
  {
    name: "Karpagam",
    role: "Frontend",
    image: Karpagam,
    linkedin: "http://www.linkedin.com/in/karpagam/ ",
    github: "https://github.com/karpagamm ",
    portfolio: "https://product-dev-center.vercel.app/karpagam",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 mt-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              className="fw-bold text-dark"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Our Company
            </motion.h2>
            <motion.p
              className="text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We are a passionate team of tech enthusiasts who collaborated on
              the SecuroSphere product, leveraging advanced AI-driven solutions
              to enhance web application security. Our mission is to develop
              innovative cybersecurity measures that ensure a safe and reliable
              online presence. With a strong foundation in full-stack
              development and cybersecurity, we strive to create cutting-edge
              solutions that protect businesses from evolving digital threats.
              Our approach integrates multi-layered security protocols,
              AI-powered threat detection, and seamless authentication
              mechanisms to safeguard sensitive data and user privacy. At
              SecuroSphere, we are committed to pushing the boundaries of
              cybersecurity, empowering organizations with the tools they need
              to stay secure in an increasingly complex digital landscape.
            </motion.p>
          </Col>
        </Row>

        <div className="team-scroll-container">
          <div className="team-scroll-wrapper">
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="team-card">
                <Card className="text-center border-0 shadow-sm p-3 rounded ">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    className="rounded-circle mx-auto"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                    <Card.Text className="text-muted">{member.role}</Card.Text>
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="d-flex justify-content-center gap-3"
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <Linkedin
                          width={20}
                          height={20}
                          style={{ color: "black" }}
                        />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <Github
                          width={20}
                          height={20}
                          style={{ color: "black" }}
                        />
                      </a>
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <Globe
                          width={20}
                          height={20}
                          style={{ color: "black" }}
                        />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
