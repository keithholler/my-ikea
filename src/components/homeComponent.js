import React, { Component } from "react";

import { Card, Row, Col,Container,Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="mt-5"  >
      <Row style={{ height: "280px" }}>
      <Card className="border-0" style={{backgroundColor: "#536c95",color:"white"}}>
        <Row >
          <Col xs={8}>
        <Card.Img variant="top" src="../assets/IkeaFrontImg.JPG" style={{ width: "100%", height:"280px" }} className=""/>
        </Col>
        <Col >
        <Card.Body >
          <Card.Title>Bring some order to your life at home</Card.Title>

          <Card.Text >
          Get organized with clear storage boxes so you can find what you need when you need it!
          </Card.Text>
          <Button variant="light" size="sm">Shop now</Button> 
        </Card.Body>
        </Col>
        </Row>
      </Card>
      </Row>
      </Container>
    );
  }
}

export default Home;
