import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

import Nagapriya from "../assets/naga.jpg";
import Sivasankari from "../assets/siva.jpg";
import Jeyaraman from "../assets/jeyaraman.jpg";
import Kajalakshmi from "../assets/kaja.jpg";
import Jeyashree from "../assets/jeyashree.jpg";
import Robin from "../assets/naga.jpg";
import Prasanna from "../assets/prasanna.jpg";
import Senthil from "../assets/senthil.jpeg";
import Dhileepan from "../assets/dhileepan.jpeg";

const teamMembers = [
  {
    name: "Senthil Kumar ",
    role: "Analyst",
    image: Senthil,
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Dhileepan ",
    role: "Analyst",
    image: Dhileepan,
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Prasanna P",
    role: "Analyst",
    image: Prasanna,
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Sivasankari",
    role: "Backend Lead",
    image: Sivasankari,
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "Jeyaraman",
    role: "Frontend Lead",
    image: Jeyaraman,
    linkedin: "https://www.linkedin.com/in/sophialee",
  },
  {
    name: "Nagapriya",
    role: "Backend",
    image: Nagapriya,
    linkedin: "https://www.linkedin.com/in/alexjohnson",
  },
  {
    name: "Kajalakshmi",
    role: "Frontend",
    image: Kajalakshmi,
    linkedin: "https://www.linkedin.com/in/michaelbrown",
  },
  {
    name: "Jeyashree",
    role: "Frontend",
    image: Jeyashree,
    linkedin: "https://www.linkedin.com/in/emilywilson",
  },
  {
    name: "Robin",
    role: "Backend ",
    image: Robin,
    linkedin: "https://www.linkedin.com/in/danielmartinez",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section py-5  mt-5">
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
              We are a team of students who collaborated on the SecuroSphere
              project, leveraging advanced AI-driven solutions to enhance web
              application security. Our mission is to develop innovative
              cybersecurity measures that ensure a safe and reliable online
              presence.
            </motion.p>
          </Col>
        </Row>

        <div className="team-scroll-container">
          <motion.div
            className="team-scroll-wrapper"
            drag="x"
            dragConstraints={{ left: -900, right: 0 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="team-card">
                <Card className="text-center border-0 shadow-sm p-3 rounded">
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
                    <div className="d-flex justify-content-center gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link "
                      >
                        <Linkedin
                          width={20}
                          height={20}
                          style={{ color: "black" }}
                        />
                      </a>
                      <a
                        href="https://github.com/securosphere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link "
                      >
                        <Github
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
