import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Redirect } from "../assets/redirect.svg";
import { ReactComponent as Configure } from "../assets/configure.svg";
import { ReactComponent as Decode } from "../assets/decode.svg";
import { ReactComponent as Security } from "../assets/security.svg";

export const Steps = () => {
  return (
    <Container className="py-5 steps-container">
      <div className="d-flex justify-content-center">
        <Badge
          pill
          bg="light"
          text="dark"
          style={{ width: "fit-content" }}
          className="mb-3 px-3 py-2 shadow-sm"
        >
          ✨ How to Start?
        </Badge>
      </div>
      <h1 className="text-center mt-3 mb-4">Simple Steps to Get Started</h1>
      <p className="text-muted mb-5 lead">
        Follow these simple steps to get started with our platform.
      </p>
      <Row className="mt-4">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="step-card">
            <Card.Body>
              <div className="">
                <div className="d-flex align-items-center justify-content-between my-4">
                  <Card.Subtitle className="muted">STEP 1</Card.Subtitle>
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <User style={{ width: "20px", height: "20px" }} />
                  </Badge>
                </div>
                <Card.Title className="fw-bold mb-2">Sign Up</Card.Title>
                <Card.Text>
                  Register in just a few minutes and kickstart your integration
                  journey.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="step-card">
            <Card.Body>
              <div className="">
                <div className="d-flex align-items-center justify-content-between my-4">
                  <Card.Subtitle className="muted">STEP 2</Card.Subtitle>
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <Configure style={{ width: "20px", height: "20px" }} />
                  </Badge>
                </div>
                <Card.Title className="fw-bold mb-2">Configure</Card.Title>
                <Card.Text>
                  Configure your Organization settings & authentication methods.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="step-card">
            <Card.Body>
              <div className="">
                <div className="d-flex align-items-center justify-content-between my-4">
                  <Card.Subtitle className="muted">STEP 3</Card.Subtitle>
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <Redirect style={{ width: "20px", height: "20px" }} />
                  </Badge>
                </div>
                <Card.Title className="fw-bold mb-2">Redirect</Card.Title>
                <Card.Text>
                  Redirect your users to the login page of SecuroSphere.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="step-card">
            <Card.Body>
              <div className="">
                <div className="d-flex align-items-center justify-content-between my-4">
                  <Card.Subtitle className="muted">STEP 4</Card.Subtitle>
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <Decode style={{ width: "20px", height: "20px" }} />
                  </Badge>
                </div>
                <Card.Title className="fw-bold mb-2">Decode</Card.Title>
                <Card.Text>
                  Decode the JWT token and retrieve the user details.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
