import { Container, Row, Col, Accordion } from "react-bootstrap";

export const FAQ = () => {
  return (
    <section className="faq-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted lead mb-5">
              Have questions? We've got answers. Check out our FAQs below.
            </p>
          </Col>
        </Row>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I sign up?</Accordion.Header>
            <Accordion.Body>
              Register in just a few minutes and kickstart your integration
              journey.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I configure my settings?</Accordion.Header>
            <Accordion.Body>
              Configure your Organization settings & authentication methods.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I redirect users?</Accordion.Header>
            <Accordion.Body>
              Redirect your users to the login page of SecuroSphere.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I decode the JWT token?</Accordion.Header>
            <Accordion.Body>
              Decode the JWT token and retrieve the user details.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};
