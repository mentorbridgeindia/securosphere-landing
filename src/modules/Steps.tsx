import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Redirect } from "../assets/redirect.svg";
import { ReactComponent as Configure } from "../assets/configure.svg";
import { ReactComponent as Decode } from "../assets/decode.svg";
import { ReactComponent as Security } from "../assets/security.svg";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  stepNumber: number;
}

const steps: Step[] = [
  {
    title: "Sign Up",
    description:
      "Register in just a few minutes and kickstart your integration journey.",
    icon: <User style={{ width: "20px", height: "20px" }} />,
    stepNumber: 1,
  },
  {
    title: "Configure",
    description:
      "Configure your Organization settings & authentication methods.",
    icon: <Configure style={{ width: "20px", height: "20px" }} />,
    stepNumber: 2,
  },
  {
    title: "Redirect",
    description: "Redirect your users to the login page of SecuroSphere.",
    icon: <Redirect style={{ width: "20px", height: "20px" }} />,
    stepNumber: 3,
  },
  {
    title: "Decode",
    description: "Decode the JWT token and retrieve the user details.",
    icon: <Decode style={{ width: "20px", height: "20px" }} />,
    stepNumber: 4,
  },
];

export const Steps = () => {
  return (
    <Container id="start" className="py-5 steps-container">
      <div className="d-flex justify-content-center">
        <Badge
          pill
          bg="light"
          text="dark"
          style={{
            width: "fit-content",
            background:
              "linear-gradient(135deg,rgb(205, 225, 244) 0%,rgb(95, 167, 244) 100%)",
          }}
          className="mb-3 px-3 py-2 shadow-sm"
        >
           How to Start?
        </Badge>
      </div>
      <h1 className="text-center mt-3 mb-4">Simple Steps to Get Started</h1>
      <p className="text-muted mb-5 lead">
        Follow these simple steps to get started with our platform.
      </p>
      <Row className="mt-4">
        {steps.map((step, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="mb-4">
            <Card className="step-cards">
              <Card.Body>
                <div className="">
                  <div className="d-flex align-items-center justify-content-between my-4">
                    <Card.Subtitle className="muted">{`STEP ${step.stepNumber}`}</Card.Subtitle>
                    <Badge bg="light" text="dark" className="ms-2 rounded-5">
                      {step.icon}
                    </Badge>
                  </div>
                  <Card.Title className="fw-bold mb-2">{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
