import { Badge, Col, Container, Row } from "react-bootstrap";
import "./Benefits.css";
import { ReactComponent as ExpertIcon } from "../assets/expert.svg";
import { ReactComponent as ScalableIcon } from "../assets/scalable.svg";
import { ReactComponent as MagicIcon } from "../assets/magic.svg";
import { ReactComponent as EfficiencyIcon } from "../assets/efficiency.svg";
import { ReactComponent as SecurityIcon } from "../assets/security.svg";

export const Benefits = () => {
  return (
    <Container id="usecase" className="py-5">
      <Row className="align-items-start">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-start text-center sticky"
          style={{ position: "sticky", top: "100px" }}
        >
          <div className="d-flex flex-column gap-3 text-center align-items-start justify-content-center">
            <div className="d-flex justify-content-start align-left">
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
            <h1 className="fw-bold lh-md  align-left ">
              Unlock a New Era of Operational Excellence and Innovation
            </h1>
            <p className="text-muted text-start lh-lg lead">
              Unlock operational excellence and innovation with our advanced
              tools and streamlined processes.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
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
          <ul className="list-unstyled benefits-list">
            <li className="mb-5 d-flex gap-5 align-items-center flex-md-row flex-column">
              <div className="side-line ms-2 mb-3 mb-md-0">
                <div className="glow"></div>
                <div className="shade"></div>
              </div>
              <div className="text-left d-flex flex-column gap-2 justify-content-start align-items-start">
                <div className="d-flex gap-3 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <ExpertIcon />
                  </Badge>
                  <h3 className="fw-bold">Expert Team</h3>
                </div>
                <p className="text-muted lead align-left">
                  An expert team ready to tackle your challenges with innovative
                  solutions and proven strategies.
                </p>
              </div>
            </li>
            <li className="mb-5 d-flex gap-5 align-items-center flex-md-row flex-column">
              <div className="side-line ms-2 mb-3 mb-md-0">
                <div className="glow"></div>
                <div className="shade"></div>
              </div>
              <div className="text-left d-flex flex-column gap-2 justify-content-start align-items-start">
                <div className="d-flex gap-3 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <ScalableIcon />
                  </Badge>
                  <h3 className="fw-bold">Fast and Scalable</h3>
                </div>
                <p className="text-muted lead align-left">
                  Scale your business effortlessly with our solutions, designed
                  to grow alongside your evolving needs.
                </p>
              </div>
            </li>
            <li className="mb-5 d-flex gap-5 align-items-center flex-md-row flex-column">
              <div className="side-line ms-2 mb-3 mb-md-0">
                <div className="glow"></div>
                <div className="shade"></div>
              </div>
              <div className="text-left d-flex flex-column gap-2 justify-content-start align-items-start">
                <div className="d-flex gap-3 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <MagicIcon />
                  </Badge>
                  <h3 className="fw-bold">Customizable for You</h3>
                </div>
                <p className="text-muted lead align-left">
                  Customize the platform to perfectly align with your business's
                  unique requirements and goals.
                </p>
              </div>
            </li>
            <li className="mb-5 d-flex gap-5 align-items-center flex-md-row flex-column">
              <div className="side-line ms-2 mb-3 mb-md-0">
                <div className="glow"></div>
                <div className="shade"></div>
              </div>
              <div className="text-left d-flex flex-column gap-2 justify-content-start align-items-start">
                <div className="d-flex gap-3 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <EfficiencyIcon />
                  </Badge>
                  <h3 className="fw-bold">Maximum Efficiency</h3>
                </div>
                <p className="text-muted lead align-left">
                  Optimize your processes for peak efficiency with intelligent
                  automation.
                </p>
              </div>
            </li>
            <li className="mb-5 d-flex gap-5 align-items-center flex-md-row flex-column">
              <div className="side-line ms-2 mb-3 mb-md-0">
                <div className="glow"></div>
                <div className="shade"></div>
              </div>
              <div className="text-left d-flex flex-column gap-2 justify-content-start align-items-start">
                <div className="d-flex gap-3 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <SecurityIcon />
                  </Badge>
                  <h3 className="fw-bold">User Friendly</h3>
                </div>
                <p className="text-muted lead align-left">
                  A simple and accessible interface for users of all skill
                  levels, making it easy to find what you need.
                </p>
              </div>
            </li>
            <li className="mb-5 d-flex gap-5 align-items-center flex-md-row flex-column">
              <div className="side-line ms-2 mb-3 mb-md-0">
                <div className="glow"></div>
                <div className="shade"></div>
              </div>
              <div className="text-left d-flex flex-column gap-2 justify-content-start align-items-start">
                <div className="d-flex gap-3 align-items-center">
                  <Badge bg="light" text="dark" className="ms-2 rounded-5">
                    <ExpertIcon />
                  </Badge>
                  <h3 className="fw-bold">Security you can Trust</h3>
                </div>
                <p className="text-muted lead align-left">
                  Protect sensitive data with industry leading security to
                  prevent unauthorized breaches.
                </p>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
