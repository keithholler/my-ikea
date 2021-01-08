import React, { Component } from "react";
import { ADVERTISE } from "../shared/advertise.js";
import { SHOPBY } from "../shared/shopby.js";
import { SERVICES } from "../shared/services.js";
import { SUSTAINHOME } from "../shared/sustainhome.js";
import { BUTTONS } from "../shared/buttons.js";
import InfiniteCarousel from "react-leaf-carousel";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertise: ADVERTISE,
      shopby: SHOPBY,
      services: SERVICES,
      sustainhome: SUSTAINHOME,
      buttons:BUTTONS
    };
  }

  setActiveItemIndex = (value) => {
    this.setState({ activeItemIndex: value });
  };
  render() {
    const advertiseCard = this.state.advertise.map((advertisement) => {
      return (
        <Col xs="4" style={{ padding: "0px" }}>
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
        <div style={{ padding: "0px" }}>
          <Card className="border-0 p-2 d-flex align-items-end justify-content-center">
            <Card.Img
              src={shopcards.shopImg}
              style={{ borderRadius: "0%", width: "100%" }}
            />

            <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
              <Button
                className="pillButton"
                style={{
                  fontSize: "9px",
                  backgroundColor: "white ",
                  borderColor: "white ",
                  color: "black",
                  width: "300px",
                }}
              >
                {shopcards.text}
              </Button>
            </Card.ImgOverlay>
          </Card>
        </div>
      );
    });

    const serviceCard = this.state.services.map((service) => {
      return (
        <Col xs="3" style={{ padding: "0px" }}>
          <Card className="border-0 p-1">
            <Card.Body style={{ backgroundColor: "#C9C9C9" }}>
              <Card.Text style={{ height: "75px", color: "black " }}>
                <Row className="d-flex justify-content-center">
                  <i
                    className={`${service.serviceImg}`}
                    style={{ color: "black " }}
                  />
                </Row>
                <Row
                  className="d-flex justify-content-center"
                  style={{ fontStyle: "bold" }}
                >
                  {service.title}
                </Row>
                <Row className="text-center pt-3" style={{ fontSize: "12px" }}>
                  {service.text}
                </Row>
              </Card.Text>
              <i
                className="fa fa-arrow-circle-right fa-lg "
                style={{ color: "black " }}
              />
            </Card.Body>
          </Card>
        </Col>
      );
    });

    const sustainhomecards = this.state.sustainhome.map((sustainhome) => {
      return (
        <div style={{ padding: "0px" }}>
          <Card className="border-0 p-2 d-flex align-items-end justify-content-center">
            <Card.Img
              src={sustainhome.shopImg}
              style={{ borderRadius: "0%", width: "100%" }}
            />

            <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
              <Button
                className="pillButton"
                style={{
                  fontSize: "9px",
                  backgroundColor: "white ",
                  borderColor: "white ",
                  color: "black",
                  width: "300px",
                }}
              >
                {sustainhome.text}
              </Button>
            </Card.ImgOverlay>
          </Card>
        </div>
      );
    });

    const buttonscards = this.state.buttons.map((button) => {
      return (
    
              <Button
                className="pillButton text-nowrap"
                style={{
                  fontSize: "7px",
                  backgroundColor: "white ",
                  borderColor: "grey ",
                  color: "black",
                  width: "100px",

                }}
              >
                {button.text}
              </Button>
             
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
          <h4 style={{ fontWeight: "bold" }}>Shop by category</h4>
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
        <Row>
          <h4>Services to help you shop</h4>
        </Row>
        <Row>{serviceCard}</Row>
        <Row className="row-content">
          <Button
            className="pillButton"
            style={{
              fontSize: "9px",
              backgroundColor: "black",
              color: "white",
              borderColor: "white ",
              width: "125px",
            }}
          >
            Shop all services
          </Button>
        </Row>
        <Row className="mt-5">
          <Col xs={6}>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              A furniture system made for children
            </p>
            <p style={{ fontSize: "10px" }}>
              SMÅSTAD is a furniture family for sleep and storage that can grow
              with your child. These clever basics will make it easy to create
              the perfect solution for smaller children as well as for teens.
            </p>
          </Col>
          <Col className="d-flex justify-content-end align-items-end">
            <Button
              className="pillButton"
              style={{
                fontSize: "8px",
                backgroundColor: "white",
                color: "black",
                borderColor: "grey ",
                width: "150px",
              }}
            >
              See the SMÅSTAD system
            </Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center row-content">
          <Col xs={6} className="p-0">
            <Card className="border-0 p-1">
              <Card.Img
                src="../assets/childfurn1.jpg"
                style={{ borderRadius: "0%" }}
              />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "115px",
                    height: "75px",
                    color: "black",
                    backgroundColor: "white",
                    border: "grey 1px solid",
                  }}
                >
                  <Row>
                    <Col xs={8} className="pl-3 pt-1">
                      <div
                        className="pl-1"
                        style={{ fontWeight: "bold", fontSize: "9px" }}
                      >
                        SMÅSTAD/ UPPFÖRA
                      </div>
                      <div className="pl-1" style={{ fontSize: "10px" }}>
                        Wardrobe
                      </div>
                      <div
                        className="pl-1"
                        style={{ fontWeight: "bold", fontSize: "10px" }}
                      >
                        $173.98
                      </div>
                    </Col>
                    <Col className="p-0">
                      <i
                        className="fa fa-arrow-right"
                        style={{ color: "black" }}
                      />
                    </Col>
                  </Row>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6} className="p-0">
            <Card className="border-0 p-1">
              <Card.Img
                src="../assets/childfurn2.jpg"
                style={{ borderRadius: "0%" }}
              />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "115px",
                    height: "75px",
                    color: "black",
                    backgroundColor: "white",
                    border: "grey 1px solid",
                  }}
                >
                  <Row>
                    <Col xs={8} className="pl-3 pt-1">
                      <div
                        className="pl-1"
                        style={{
                          color: "#ca5008",
                          fontWeight: "bold",
                          fontSize: "10px",
                        }}
                      >
                        NEW
                      </div>
                      <div
                        className="pl-1"
                        style={{ fontWeight: "bold", fontSize: "9px" }}
                      >
                        UPPRYMD
                      </div>
                      <div className="pl-1" style={{ fontSize: "10px" }}>
                        Box
                      </div>
                      <div
                        className="pl-1"
                        style={{ fontWeight: "bold", fontSize: "10px" }}
                      >
                        $5.99
                      </div>
                    </Col>
                    <Col className="p-0">
                      <i
                        className="fa fa-arrow-right"
                        style={{ color: "black" }}
                      />
                    </Col>
                  </Row>
                </div>


              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={6}>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              A furniture system made for children
            </p>
            <p style={{ fontSize: "10px" }}>
              SMÅSTAD is a furniture family for sleep and storage that can grow
              with your child. These clever basics will make it easy to create
              the perfect solution for smaller children as well as for teens.
            </p>
          </Col>
        </Row>
        <Row className="row-content">
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
              {sustainhomecards}
            </InfiniteCarousel>
          </Col>
        </Row>
        <Row className="row-content">
          <Col>
            <Card>
              <Card.Img
                src="../assets/coffee.jpg"
                style={{ borderRadius: "0%" }}
              />
              <Card.Body style={{height:'115px'}}>
                <Card.Text style={{ color: "black",fontSize: "10px"}}>
                  Enjoy a free hot coffee or tea on us! Plus, other great
                  rewards and benefits. Join for free, today.
                </Card.Text>
                <Button
              className="pillButton"
              style={{
                fontSize: "8px",
                backgroundColor: "black",
                color: "white",
                borderColor: "black ",
                width: "100px",
              }}
            >
              Join IKEA Family
            </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                src="../assets/plantballs.jpg"
                style={{ borderRadius: "0%" }}
              />
              <Card.Body style={{height:'115px'}}>
                <Card.Text style={{ color: "black",fontSize: "10px"}}>
                  <b>HUVUDROLL </b>Plant balls <b>$5.99/1.102 lb</b>A new plant
                  ball for the many meat lovers.{" "}
                </Card.Text>
                <Button
              className="pillButton"
              style={{
                fontSize: "8px",
                backgroundColor: "black",
                color: "white",
                borderColor: "black ",
                width: "100px",
              }}
            >
              Learn more
            </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-content ">
          <Col className="d-flex justify-content-around">
          {buttonscards}
          </Col>
         
        </Row>
    
          
      </Container>
    );
  }
}

export default Home;
