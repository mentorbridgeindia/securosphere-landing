import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button, FormControl } from "react-bootstrap";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Website } from "../assets/website.svg";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const contactInfo: ContactInfo = {
  address: "Dindigul – Palani Highway, Dindigul -624 002",
  phone: "+1 234 567 890",
  email: "customer@active.com",
};

const ContactForm = () => {
  return (
    <div>
      <Container id="contact" className="py-4 py-lg-5 ">
        <Row className="justify-content-center ">
          <Col xs={12} md={11} lg={10} xl={9}>
            <Row className="shadow-lg bg-white rounded-4 mx-2 mx-md-0">
              <Col md={6} className="bg-light rounded-4 p-4 p-lg-5">
                <div className="text-center mb-4">
                  <h2 className="mb-3 fs-3">Contact Information</h2>
                  <p className="text-muted small">
                    Contact us. Your feedback matters. Let's build a better
                    future together.
                  </p>
                </div>

                <div className="text-center mb-4">
                  <h3 className="mb-2 fs-4">Head Office</h3>
                  <p className="text-muted small">{contactInfo.address}</p>
                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                  <h4 className="d-flex align-items-center gap-2 fs-5">
                    <Phone style={{ width: "20px", height: "20px" }} />{" "}
                    {contactInfo.phone}
                  </h4>
                  <h4 className="d-flex align-items-center gap-2 fs-5">
                    <Website style={{ width: "20px" ,height:"20px"}} />{" "}
                    {contactInfo.email}
                  </h4>
                </div>
              </Col>

              <Col md={6} className="p-4 p-lg-5">
                <div className="text-center mb-4">
                  <h2 className="mb-2 fs-3">Get In Touch</h2>
                  <p className="text-muted small">
                    We are here ready to solve your problem
                  </p>
                </div>

                <Form>
                  <Row className="g-3 mb-3">
                    <Col xs={12} sm={6}>
                      <FormControl
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        className="rounded-pill py-2 px-3"
                        required
                      />
                    </Col>
                    <Col xs={12} sm={6}>
                      <FormControl
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        className="rounded-pill py-2 px-3"
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="g-3 mb-3">
                    <Col xs={12} sm={6}>
                      <FormControl
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        className="rounded-pill py-2 px-3"
                        required
                      />
                    </Col>
                    <Col xs={12} sm={6}>
                      <FormControl
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="rounded-pill py-2 px-3"
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <FormControl
                        as="textarea"
                        rows={4}
                        placeholder="Message"
                        name="message"
                        className="rounded-4 py-2 px-3"
                        required
                      />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <button className="px-4 py-2 text-white font-semibold bg-black rounded-pill shadow-lg w-100 border-0">
                      Submit
                    </button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
