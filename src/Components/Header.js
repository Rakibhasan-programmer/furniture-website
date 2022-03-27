import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import furniturePic from '../Assets/hero.png'

const Header = () => {
  return (
    <div >
      <Container>
        <Row
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center text-dark"
        >
          <Col md={4} sm={12} className='textCenter-sm'>
            <p>QUALITY IS EVERYONE'S RESPONSIBILTY</p>
            <h2>
              A Home Is Not A Home <br /> Without Furniture
            </h2>
            <Button variant="dark btn-lg px-5 my-4">SHOP NOW</Button>
          </Col>
          <Col md={8}>
          <img className="w-100 img-fluid"
            src={furniturePic}
            alt=""
          /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
