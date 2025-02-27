import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button, FormControl } from "react-bootstrap";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Website } from "../assets/website.svg";
import { ReactComponent as Locations } from "../assets/location.svg";
import axios from "axios";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const contactInfo: ContactInfo = {
  address: "Dindigul - 624 002",
  phone: "+91 91760 08807",
  email: "customer@securosphere.com",
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.securosphere.in/marketing/contactUsInfo",
        formData
      );
      console.log(response.data);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container id="contact" className="py-4 py-lg-5">
      <Row className="justify-content-center">
        <Col xs={12} md={11} lg={10} xl={9}>
          <Row className="shadow-lg bg-white rounded-4 mx-2 mx-md-0">
            <Col md={6} className="bg-light rounded-4 p-4 p-lg-5">
              <div className="text-center mb-4">
                <h2 className="mb-3 fs-3">Contact Information</h2>
                <p className="text-muted small">
                  Contact us. Your feedback matters. Let's build a better future
                  together.
                </p>
              </div>

              <div className="d-flex flex-column align-items-center gap-3">
                <h4 className="d-flex align-items-center gap-2 fs-5">
                  <Locations style={{ width: "20px", height: "20px" }} />
                  {contactInfo.address}
                </h4>
                <h4 className="d-flex align-items-center gap-2 fs-5">
                  <Phone style={{ width: "20px", height: "20px" }} />
                  {contactInfo.phone}
                </h4>
                <h4 className="d-flex align-items-center gap-2 fs-5">
                  <Website style={{ width: "20px", height: "20px" }} />
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

              <Form onSubmit={handleSubmit}>
                <Row className="g-3 mb-3">
                  <Col xs={12} sm={6}>
                    <FormControl
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="rounded-pill py-2 px-3"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <FormControl
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="rounded-pill py-2 px-3"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Row className="g-3 mb-3">
                  <Col xs={12} sm={6}>
                    <FormControl
                      type="phone"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      className="rounded-pill py-2 px-3"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <FormControl
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="rounded-pill py-2 px-3"
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="px-4 py-2 text-white font-semibold bg-black rounded-pill shadow-lg w-100 border-0"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
