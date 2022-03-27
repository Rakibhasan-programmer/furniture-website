import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sofa from '../Assets/sofas.jpg'
import table from '../Assets/tables.jpg'
import chair from '../Assets/chairs.jpg'
import light from '../Assets/lights.jpg'
import wardrobe from '../Assets/wardrobes.jpg'
import bed from '../Assets/beds.jpg'

const Shop = () => {
  return (
    <div className="my-5">
      <Container fluid>
        <p className="fw-bold fs-1 text-center mb-5 ">Shop by Category</p>
        <Row className="my-4">
          <Col>
            <img className="img-fluid" src={sofa} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={table} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={chair} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="img-fluid" src={light} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={wardrobe} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={bed} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
