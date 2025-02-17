import { Badge, Col, Container, Row } from "react-bootstrap";
import signinImg from "../assets/Signin.jpg";
import signupImg from "../assets/Signup.jpg";
import otp from "../assets/otp.png";
import auth from "../assets/Auth.jpg";

export const Components = () => {
  return (
    <div>
      <Container className="mt-5 features-container">
        <Row className="mt-5">
          <Col md={6} xs={12}>
            <Badge
              pill
              bg="light"
              text="dark"
              className="mb-3 px-3 py-2 shadow-sm"
            >
              ✨ Screens
            </Badge>
            <h1 className="text-center mt-3 mb-5">Ready-to-Use Screens</h1>
            <p className="lead text-muted text-center mt-3 mb-3">
              Simply redirect to our screens to get your job done.
              <br />
              No need to build your own screens.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Login
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Register
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Forgot Password
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Change Password
              </Badge>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 border shadow-sm"
              >
                Account Settings
              </Badge>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-5">
              <div>
                <img
                  src={signinImg}
                  className="img-fluid rounded-2 shadow-lg"
                  alt="sign-in"
                />
              </div>
              <div>
                <img
                  src={signupImg}
                  className="img-fluid rounded-2 shadow-lg"
                  alt="sign-up"
                />
              </div>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="d-flex justify-content-center flex-column gap-2 mt-5 align-items-center">
              <img
                src={auth}
                className="img-fluid rounded-2 shadow-lg"
                alt="account"
              />
              <img
                src={otp}
                alt="change"
                className="img-fluid rounded-2 shadow-lg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
