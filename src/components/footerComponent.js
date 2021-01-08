import React,{useState} from "react";
import {
  Button,
Container,
  Row,
  Col
} from "react-bootstrap";

import { HELPLINKS } from "../shared/helplinks.js";
import { ABOUTLINKS } from "../shared/aboutlinks.js";
import { SHOPLEARNLINKS } from "../shared/shoplearnlinks.js";
import { LEGALLINKS } from "../shared/legallinks.js";
function Footer() {
    const [helplinks] = useState(HELPLINKS);
    const [aboutlinks] = useState(ABOUTLINKS);
    const [shoplearnlinks] = useState(SHOPLEARNLINKS);
    const [legallinks] = useState(LEGALLINKS);


    const helplinkslinks = helplinks.map((helplinks) => {
        return (
         
              <ul className="m-0 p-0">
                  <li style={{fontSize:"12px"}}>
                  {helplinks.text}
                  </li>
              </ul>
        
   
        );
      });
      const aboutlinkslinks = aboutlinks.map((aboutlinks) => {
        return (
         
              <ul className="m-0 p-0">
                  <li style={{fontSize:"12px"}}>
                  {aboutlinks.text}
                  </li>
              </ul>
        
   
        );
      });
      const shoplearnlinkslinks = shoplearnlinks.map((shoplearnlinks) => {
        return (
         
              <ul className="m-0 p-0">
                  <li style={{fontSize:"12px"}}>
                  {shoplearnlinks.text}
                  </li>
              </ul>
        
   
        );
      });
      const legallinkslinks = legallinks.map((legallinks) => {
        return (
         
              <ul className="m-0 p-0">
                  <li style={{fontSize:"12px"}}>
                  {legallinks.text}
                  </li>
              </ul>
        
   
        );
      });
  return ( 
      <Container fluid style={{backgroundColor:"#F3F3F3"}} className="px-5">
      <Row>
          <Col xs={4}>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            Join IKEA Family            </p>
            <p style={{ fontSize: "10px" }}>
            Bring your ideas to life with special discounts, inspiration, 
            and lots of good things in store. It's all free. See more.
            </p>
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
                  Join or log in
                </Button>
          </Col>
          <Col xs={2}>
              <b style={{fontSize:"12px"}}>Help</b>
          {helplinkslinks}
          </Col>
          <Col xs={2}>
              <b style={{fontSize:"12px"}}>Shop & Learn</b>
          {shoplearnlinkslinks}
          </Col>
          <Col xs={2}>
              <b style={{fontSize:"12px"}}>About IKEA</b>
          {aboutlinkslinks}
          </Col>
          <Col xs={2}>
              <b style={{fontSize:"12px"}}>Legal</b>
          {legallinkslinks} 
          </Col>
          
          
        
      </Row>
      </Container>
   );
}

export default Footer;