import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as API } from "../assets/api.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Magic } from "../assets/magic.svg";
import { ReactComponent as OAuth } from "../assets/oauth.svg";
import { ReactComponent as Security } from "../assets/security.svg";
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
        <Col>
          <Card>
            <Card.Body className="feature-card">
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
                style={{ height: "250px" }}
                src={
                  "https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png"
                }
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="feature-card">
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
                style={{ height: "250px" }}
                src={
                  "https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png"
                }
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="feature-card">
              <Card.Title>
                AI Behavioral Analysis
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <Magic />
                </Badge>
              </Card.Title>
              <Card.Text>
                With AI, we analyze your user's behavior to keep you app safe
                and secure.
              </Card.Text>
              <Card.Img
                style={{ height: "250px" }}
                src={
                  "https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png"
                }
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body className="feature-card">
              <Card.Title>
                Customize Everything
                <Badge bg="light" text="dark" className="ms-2 rounded-5">
                  <Edit />
                </Badge>
              </Card.Title>
              <Card.Text>
                Customize everything to your liking right from signup page to
                email server.
              </Card.Text>
              <Card.Img
                style={{ height: "350px" }}
                src={
                  "https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png"
                }
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="feature-card">
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
                style={{ height: "350px" }}
                src={
                  "https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png"
                }
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
