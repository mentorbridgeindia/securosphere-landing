import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

import Nagapriya from "../assets/naga.jpg";
import Sivasankari from "../assets/siva1.jpg";
import Jeyaraman from "../assets/jeyaraman.jpg";
import Kajalakshmi from "../assets/kaja.jpg";
import Jeyashree from "../assets/jeyashree.jpg";
import Robin from "../assets/robin.jpg";
import Prasanna from "../assets/prasanna.jpg";
import Karpagam from "../assets/Karpagam.jpg";
import Senthil from "../assets/senthil.jpeg";
import Dhileepan from "../assets/dhileepan.jpeg";

const teamMembers = [
  {
    name: "Senthil Kumar",
    role: "Analyst",
    image: Senthil,
    linkedin: "https://www.linkedin.com/in/senthilk979/ ",
    github: "https://www.linkedin.com/in/senthilk979/ ",
  },
  {
    name: "Dhileepan",
    role: "Analyst",
    image: Dhileepan,
    linkedin: "https://www.linkedin.com/in/dhileepan-dhanapal-31901224/ ",
    github: "https://www.linkedin.com/in/dhileepan-dhanapal-31901224/ ",
  },
  {
    name: "Prasanna P",
    role: "Analyst",
    image: Prasanna,
    linkedin: "https://github.com/Prasanna0709 ",
    github: "https://www.linkedin.com/in/p-prasanna-817b9027b/ ",
  },
  {
    name: "Sivasankari",
    role: "Backend Lead",
    image: Sivasankari,
    linkedin: "https://www.linkedin.com/in/sivasankari-k-3643b8266/ ",
    github: "https://github.com/sivasankari-kannan ",
  },
  {
    name: "Jeyaraman",
    role: "Frontend Lead",
    image: Jeyaraman,
    linkedin: "https://www.linkedin.com/in/jeyaraman23/ ",
    github: "https://github.com/Jagan6923 ",
  },
  {
    name: "Kajalakshmi",
    role: "Frontend",
    image: Kajalakshmi,
    linkedin: "https://www.linkedin.com/in/kajalakshmi-m/ ",
    github: "https://github.com/Kajalakshmi11 ",
  },
  {
    name: "Jeyashree",
    role: "Frontend",
    image: Jeyashree,
    linkedin: "http://www.linkedin.com/in/jeya-shree-s/ ",
    github: "https://github.com/JEYASHREESELVAN ",
  },
  {
    name: "Nagapriya",
    role: "Backend",
    image: Nagapriya,
    linkedin: "https://www.linkedin.com/in/nagapriya-sivablan/ ",
    github: "https://github.com/Nagapriya10 ",
  },
  {
    name: "Robin",
    role: "Backend",
    image: Robin,
    linkedin: "https://www.linkedin.com/in/robin-jj/ ",
    github: "https://github.com/robinjj ",
  },
  {
    name: "Karpagam",
    role: "Frontend",
    image: Karpagam,
    linkedin: "http://www.linkedin.com/in/karpagam-ms/ ",
    github: "https://github.com/karpagamm ",
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
              We are a team of students who collaborated on the SecuroSphere
              project, leveraging advanced AI-driven solutions to enhance web
              application security. Our mission is to develop innovative
              cybersecurity measures that ensure a safe and reliable online
              presence.
            </motion.p>
          </Col>
        </Row>

        <div className="team-scroll-container">
          <div className="team-scroll-wrapper">
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
