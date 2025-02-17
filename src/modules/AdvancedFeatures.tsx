import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as OAuth } from "../assets/oauth.svg";
export default function AdvancedFeatures() {
  return (
    <Container className="py-5 steps-container">
      <div className="d-flex justify-content-center flex-column align-items-center gap-3 mb-3">
        <Badge
          pill
          bg="light"
          text="dark"
          style={{ width: "fit-content" }}
          className="mb-3 px-3 py-2 shadow-sm"
        >
          ✨ Advanced Solutions
        </Badge>
        <h1 className="text-center mt-3">
          Tailored Solutions for Your Organization
        </h1>
        <p className="text-muted text-center lh-lg">
          Our advanced solutions are designed to meet the unique needs of your
          organization. and streamlined processes.
        </p>
      </div>
      <Row>
        <Col>
          <Card className="step-card">
            <Card.Body className="text-center p-2 d-flex flex-column align-items-center gap-2 justify-content-center">
              <Badge bg="light" text="dark" className="rounded-5 mt-3 fs-4">
                <OAuth />
              </Badge>
              <div className="d-flex flex-column align-items-center gap-3 px-5 mb-5">
                <Card.Title className="mt-5 fs-3">Custom Roles</Card.Title>
                <Card.Text className="text-center">
                  Customizable roles and permissions to fit your organization's
                  needs.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="step-card">
            <Card.Body className="text-center p-2 d-flex flex-column align-items-center gap-2 justify-content-center">
              <Badge bg="light" text="dark" className="rounded-5 mt-3 fs-4">
                <OAuth />
              </Badge>
              <div className="d-flex flex-column align-items-center gap-3 px-5 mb-5">
                <Card.Title className="mt-5 fs-3">
                  Member Invitations
                </Card.Title>
                <Card.Text className="text-center">
                  Invite members to your organization and manage their
                  permissions simply.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="step-card">
            <Card.Body className="text-center p-2 d-flex flex-column align-items-center gap-2 justify-content-center">
              <Badge bg="light" text="dark" className="rounded-5 mt-3 fs-4">
                <OAuth />
              </Badge>
              <div className="d-flex flex-column align-items-center gap-3 px-5 mb-5">
                <Card.Title className="mt-5 fs-3">Org Management</Card.Title>
                <Card.Text className="text-center">
                  Manage your organization's settings and members through a
                  powerful dashboard.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
