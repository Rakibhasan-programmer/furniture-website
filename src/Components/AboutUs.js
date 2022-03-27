import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="my-5">
      <Container>
        <p className="fw-bold fs-1 text-center mb-5 ">Why Choose Us?</p>
        <Row className="my-5 text-center">
          <Col>
            <h4 className="my-4">Woldwide Brand</h4>
            <p>
              Powerful Layout with Responsive functionality that can be adapted
              to any screen size. Resize browser to view responsive site.
            </p>
          </Col>
          <Col>
            <h4 className="my-4">Award Winner</h4>
            <p>
              Looks beautiful & ultra-sharp on Retina Screen Displays. Retina
              Icons, Fonts & all others graphics are optimized and customized.
            </p>
          </Col>
          <Col>
            <h4 className="my-4">Happily Service</h4>
            <p>
              Canvas includes tons of optimized code that are completely
              customizable and deliver unmatched fast performance.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
