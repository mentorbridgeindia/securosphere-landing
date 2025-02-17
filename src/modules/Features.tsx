import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as OrgManagementIcon } from "../assets/settings.svg";
import { ReactComponent as API } from "../assets/api.svg";
import { ReactComponent as Magic } from "../assets/magic.svg";
import { ReactComponent as OAuth } from "../assets/oauth.svg";
import { ReactComponent as Security } from "../assets/security.svg";
import MFA from "../assets/MFA.jpg";
export const Features = () => {
  return (
    <Container className="py-5 mt-5 features-container">
      <Badge pill bg="light" text="dark" className="mb-3 px-3 py-2 shadow-sm">
        ✨ Features
      </Badge>
      <h1 className="text-center mt-3 mb-5">
        Customizable Solutions for Every Need
      </h1>
      <p className="lead text-muted text-center mt-3 mb-3">
        Adapt our platform to suit your unique business needs with flexible,
        <br />
        scalable solutions designed to grow with you.
      </p>
      <Row className="mt-5">
        <Col md={4} xs={12} className="mb-4">
          <Card className="feature-card h-100">
            <Card.Body className="feature-card  d-flex flex-column">
              <Card.Title>
                Multi-Factor
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <Security />
                </Badge>
              </Card.Title>
              <Card.Text>
                With MFA, we add extra security checks to make sure only the
                right people get in.
              </Card.Text>
              <Card.Img
                variant="bottom"
                className="img-fluid mt-auto"
                style={{ maxHeight: "200px", objectFit: "contain" }}
                src="https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="mb-4">
          <Card className="h-100">
            <Card.Body className="feature-card  d-flex flex-column">
              <Card.Title>
                OAuth 2.0
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <OAuth />
                </Badge>
              </Card.Title>
              <Card.Text>
                With OAuth 2.0, we let you use other services to log in to our
                platform.
              </Card.Text>
              <Card.Img
                variant="bottom"
                className="img-fluid mt-auto"
                style={{ maxHeight: "200px", objectFit: "contain" }}
                src="https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="mb-4">
          <Card className="h-100">
            <Card.Body className="feature-card  d-flex flex-column">
              <Card.Title>
                AI Behavioral Analysis
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <Magic />
                </Badge>
              </Card.Title>
              <Card.Text>
                With AI, we analyze your user's behavior to keep your app safe
                and secure.
              </Card.Text>
              <Card.Img
                variant="bottom"
                className="img-fluid mt-auto"
                style={{ maxHeight: "200px", objectFit: "contain" }}
                src="https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Col md={4} xs={12} className="mb-4">
          <Card className="h-100">
            <Card.Body className="feature-card  d-flex flex-column">
              <Card.Title>
                Customize Everything
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <OrgManagementIcon
                    style={{ width: "20px", height: "20px" }}
                  />
                </Badge>
              </Card.Title>
              <Card.Text>
                Customize everything to your liking right from signup page to
                email server.
              </Card.Text>
              <Card.Img
                variant="bottom"
                className="img-fluid mt-auto"
                style={{ maxHeight: "200px", objectFit: "contain" }}
                src="https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="mb-4">
          <Card className="h-100">
            <Card.Body className="feature-card  d-flex flex-column">
              <Card.Title>
                Open API's
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <API />
                </Badge>
              </Card.Title>
              <Card.Text>
                With Open API's, you can integrate our platform with other
                services.
              </Card.Text>
              <Card.Img
                variant="bottom"
                className="img-fluid mt-auto"
                style={{ maxHeight: "200px", objectFit: "contain" }}
                src="https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
