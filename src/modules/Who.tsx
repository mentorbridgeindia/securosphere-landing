import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Api } from "../assets/api.svg";
import { ReactComponent as Startup } from "../assets/rocket.svg";
import { ReactComponent as Company } from "../assets/company.svg";

export const Who = () => {
  return (
    <Container className="py-5 mt-5">
      <Row className="align-items-start">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-start text-center"
        >
          <div className="d-flex flex-column gap-3 text-center align-items-start justify-content-center">
            <div className="d-flex justify-content-start align-left mt-4">
              <Badge
                pill
                bg="light"
                text="dark"
                style={{ width: "fit-content" }}
                className="mb-3 px-3 py-2 shadow-sm"
              >
                ✨ Who is it for ?
              </Badge>
            </div>
            <h1 className="fw-bold lh-md align-left">
              The Best Fit for Your Unique Business Needs
            </h1>
            <p className="text-muted text-start lh-lg lead">
              We prioritize your success by offering tailored solutions designed
              to meet your unique needs.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column gap-5 steps-container">
            <Card className="step-card">
              <Card.Body className="p-4">
                <Card.Title className="d-flex gap-2 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <Startup style={{ width: "20px", height: "20px" }} />
                  </Badge>
                  <h3>Startups</h3>
                </Card.Title>
                <Card.Text>
                  Start-ups can concentrate on their product, we will take care
                  of their Authentication mechanism.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="step-card">
              <Card.Body className="p-4">
                <Card.Title className="d-flex gap-2 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <Company style={{ width: "20px", height: "20px" }} />
                  </Badge>
                  <h4>Small-Medium Enterprises</h4>
                </Card.Title>
                <Card.Text>
                  Start-ups can concentrate on their product, we will take care
                  of their Authentication mechanism.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
