import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./skill.css";

const Skills = () => {
  return (
    <>
      <br></br>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "4vw" }}>
        SKILLS
      </h1>
      <br></br>
      <Container fluid className="icon-grid">
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={3} lg={2} id="col1" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col2" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col3" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col4" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col5" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col6" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col7" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col8" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col9" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col10" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col11" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col12" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col13" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col14" className="icon-col"></Col>
          <Col xs={6} sm={4} md={3} lg={2} id="col15" className="icon-col"></Col>

        </Row>
      </Container>
      <hr style={{ border: "1px solid black" }} />

    </>
  );
};

export default Skills;
