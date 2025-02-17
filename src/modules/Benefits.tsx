import { Badge, Col, Container, Row } from "react-bootstrap";

export const Benefits = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center text-center"
        >
          <div className="d-flex flex-column gap-3 text-center align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <Badge
                pill
                bg="light"
                text="dark"
                style={{ width: "fit-content" }}
                className="mb-3 px-3 py-2 shadow-sm"
              >
                ✨ Benefits
              </Badge>
            </div>
            <h2 className="fw-bold lh-md">
              Unlock a New Era of Operational Excellence and Innovation
            </h2>
            <p className="text-muted text-center lh-lg">
              Unlock operational excellence and innovation with our advanced
              tools and streamlined processes.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Robust Security
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Customizable
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Accessibility
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Automated Efficiency
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Centralized Data
              </Badge>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>👑 Expert Team</strong>
              <p className="text-muted">
                An expert team ready to tackle your challenges with innovative
                solutions and proven strategies.
              </p>
            </li>
            <li className="mb-3">
              <strong>🚀 Fast and Scalable</strong>
              <p className="text-muted">
                Scale your business effortlessly with our solutions, designed to
                grow alongside your evolving needs.
              </p>
            </li>
            <li className="mb-3">
              <strong>⚙️ Customizable for You</strong>
              <p className="text-muted">
                Customize the platform to perfectly align with your business's
                unique requirements and goals.
              </p>
            </li>
            <li className="mb-3">
              <strong>⚡ Maximum Efficiency</strong>
              <p className="text-muted">
                Optimize your processes for peak efficiency with intelligent
                automation.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
