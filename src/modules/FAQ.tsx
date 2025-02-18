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
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How to retrieve user details for my organization?
            </Accordion.Header>
            <Accordion.Body>
              Either by decoding JWT or through Open API call to our
              application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How to enable login & register for my organization?
            </Accordion.Header>
            <Accordion.Body>
              Redirect users to our subdomain dedicatedly created for your
              organization or call our open API to sign up or sign in.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is the pricing plan?</Accordion.Header>
            <Accordion.Body>
              We plan to keep SecuroSphere free for Start-ups and small/Medium
              Enterprises. For large enterprises, we are working on a pro plan,
              which will be rolled out in the future.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};
