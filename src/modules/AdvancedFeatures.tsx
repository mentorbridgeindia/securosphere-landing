import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as CustomRolesIcon } from "../assets/roles.svg";
import { ReactComponent as MemberInvitationsIcon } from "../assets/members.svg";
import { ReactComponent as OrgManagementIcon } from "../assets/settings.svg";

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
      <Row className="gy-4">
        <Col xs={12} sm={6} md={4}>
          <Card className="step-card h-100">
            <Card.Body className="text-center p-3 d-flex flex-column align-items-center gap-2 justify-content-center">
              <Badge bg="light" text="dark" className="rounded-5 mt-3 fs-4">
                <CustomRolesIcon style={{ width: "20px", height: "20px" }} />
              </Badge>
              <div className="d-flex flex-column align-items-center gap-3 px-4 mb-4">
                <Card.Title className="mt-4 fs-5">Custom Roles</Card.Title>
                <Card.Text className="text-center fs-6">
                  Customizable roles and permissions to fit your organization's
                  needs.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="step-card h-100">
            <Card.Body className="text-center p-3 d-flex flex-column align-items-center gap-2 justify-content-center">
              <Badge bg="light" text="dark" className="rounded-5 mt-3 fs-4">
                <MemberInvitationsIcon
                  style={{ width: "20px", height: "20px" }}
                />
              </Badge>
              <div className="d-flex flex-column align-items-center gap-3 px-4">
                <Card.Title className="mt-4 fs-5">
                  Member Invitations
                </Card.Title>
                <Card.Text className="text-center fs-6">
                  Invite members to your organization and manage their
                  permissions simply.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="step-card h-100">
            <Card.Body className="text-center p-3 d-flex flex-column align-items-center gap-2 justify-content-center">
              <Badge bg="light" text="dark" className="rounded-5 mt-3 fs-4">
                <OrgManagementIcon style={{ width: "20px", height: "20px" }} />
              </Badge>
              <div className="d-flex flex-column align-items-center gap-3 px-4 mb-4">
                <Card.Title className="mt-4 fs-5">Org Management</Card.Title>
                <Card.Text className="text-center fs-6">
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
