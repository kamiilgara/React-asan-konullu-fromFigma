import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHandHoldingHeart, FaCalendar } from "react-icons/fa";

function TwoDivPlus() {
  return (
    <div className="aboutAct">
      <Row>
        <Col lg={"6"}>
          <a href='/' className="d-flex divPlus ms-auto">
            <div>
              <FaHandHoldingHeart />
            </div>
            <div className="mx-auto">
              <h5>1000+</h5>
              <p>KÖNÜLLÜ</p>
            </div>
          </a>
        </Col>
        <Col lg={"6"}>
          <a href="/" className="d-flex divPlus me-auto">
            <div>
              <FaCalendar />
            </div>
            <div className="mx-auto">
              <h5>100+</h5>
              <p>LAYİHƏ</p>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default TwoDivPlus;
