import React, { Component } from "react";
import { ADVERTISE } from "../shared/advertise.js";
import { SHOPBY } from "../shared/shopby.js";
import InfiniteCarousel from 'react-leaf-carousel';
import { Card, Row, Col, Container, Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertise: ADVERTISE,
      shopby:SHOPBY

    };
  }

  setActiveItemIndex = (value) => {
    this.setState({ activeItemIndex: value });
  }
  render() {
    const advertiseCard = this.state.advertise.map((advertisement) => {
      return (
        <Col xs="4" style={{padding:"0px"}}>
          <Card className="border-0 p-2">
            <Card.Img
              src={advertisement.saleImg}
              style={{ borderRadius: "0%" }}
            />
            <Card.Body style={{ backgroundColor: advertisement.color }}>
              <Card.Text style={{ height: "100px" }}>
                {advertisement.text}
              </Card.Text>
              <i className="fa fa-arrow-circle-right fa-lg " />
            </Card.Body>
          </Card>
        </Col>
      );
    });

    const shopbycards = this.state.shopby.map((shopcards) => {
      return (
        <div style={{padding:"0px"}}>
        <Card className="border-0 p-2 d-flex align-items-end justify-content-center">
          <Card.Img
            src={shopcards.shopImg}
            style={{ borderRadius: "0%",width:"100%" }}
          />
          
          <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
           
    <Button className="pillButton" style={{fontSize:"9px"}}>{shopcards.text}</Button>
  </Card.ImgOverlay>
        </Card>
      </div>
      );
    });

    return (
      <Container className="mt-5">
        <Row style={{ height: "300px" }}>
          <Card
            className="border-0"
            style={{ backgroundColor: "#536c95", color: "white" }}
          >
            <Row>
              <Col xs={8}>
                <Card.Img
                  variant="top"
                  src="../assets/IkeaFrontImg.JPG"
                  style={{ width: "100%", height: "300px", borderRadius: "0%" }}
                  className=""
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>Bring some order to your life at home</Card.Title>

                  <Card.Text>
                    Get organized with clear storage boxes so you can find what
                    you need when you need it!
                  </Card.Text>
                  <Button variant="light" size="sm">
                    Shop now
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row className="mt-5 ">{advertiseCard}</Row>
        <Row className="mt-3">
          <h4 style={{fontWeight:"bold"}}>Shop by category</h4>
        </Row>
        <Row>
          <Col>
        <InfiniteCarousel
  
    dots={false}
    showSides={false}
    sidesOpacity={0}
    sideSize={0}
    slidesToScroll={1}
    slidesToShow={4}
    scrollOnDevice={true}
    arrows={true}
  >
    {shopbycards}
 
       
  </InfiniteCarousel>
        
  </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
