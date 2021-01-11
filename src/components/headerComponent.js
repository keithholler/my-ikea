import React, {  useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Modal,
  Row
} from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'



function Header() {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [darkmode, setDarkmode] = useState(false);

 


  return (
    
    <div>
      <Navbar  expand="md" sticky="top" style={{height:"50px"}}>
        <Button
          variant="light"
          onClick={handleShow}
          style={{ border: "1px solid black" }}
        >
          <i className="fa fa-bars fa-lg" />
        </Button>

        <Navbar.Brand href="#home" className="ml-3 mr-5 ">
        <img
         src="../assets/ikea-logo.svg"
        width="60"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 formControl align-middle" />
            <Button variant="outline-secondary" size="sm" className="align-middle">Search</Button>
          </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto topLink">
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#rooms">Rooms</Nav.Link>
            <Nav.Link href="#deals">Deals</Nav.Link>
          </Nav>
         
          <Nav.Link href="#truck">
            <i className="fa fa-truck fa-lg fa-flip-horizontal" />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-user fa-lg " />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-heart fa-lg " />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-shopping-basket fa-lg " />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <div
        id="modal_aside_right"
        className="modal fixed-right fade"
        tabindex="-1"
        role="dialog"
      >
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-dialog modal-dialog-aside"
         className="fade-scale"
          role="document"
          style={{overflowY: "auto"}}
        >
          <Modal.Header>
            <Button
            variant="light"
            onClick={handleClose}
            >
            
              <i className="fa fa-times fa-sm " />
            </Button>
            <Modal.Title className="mr-4 ml-2"><img
         src="../assets/ikea-logo.svg"
        width="60"
        height="30"
        alt="IKEA logo"
      /></Modal.Title>
            <Nav.Link href="#truck">
            <i className="fa fa-truck fa-lg fa-flip-horizontal" />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-user fa-lg " />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-heart fa-lg " />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-shopping-basket fa-lg " />
          </Nav.Link>
          </Modal.Header>
          <Modal.Body>
          <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#products"><h3>Products</h3></Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#rooms"><h3>Rooms</h3></Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#deals"><h3>Deals</h3></Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#newikea"><b>New at IKEA</b></Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#ideasinspiration"><b>Ideas and inspiration</b></Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#seasonal"><b>Seasonal</b></Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#myorders">My orders</Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#findikea">Find your IKEA store</Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#ikeacredit">IKEA Credit Card</Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#ikeafamily">IKEA Family</Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#ikeabusiness">IKEA For Business</Nav.Link>
            <Nav.Link className="mt-0 mb-0 pt-0 pb-0" href="#customerservice">Customer Service</Nav.Link>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
