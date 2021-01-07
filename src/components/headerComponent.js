import React, {  useState } from "react";
import {
  Button,
  Nav,
  Navbar,
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
      <Navbar  expand="md">
        <Button
          variant="light"
          onClick={handleShow}
          style={{ border: "1px solid black" }}
        >
          <i className="fa fa-bars fa-lg" />
        </Button>

        <Navbar.Brand href="#home" className="ml-3 mr-5 "><h3>IKEA</h3></Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 formControl align-middle" />
            <Button variant="outline-secondary" size="sm" className="align-middle">Search</Button>
          </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto topLink">
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
        >
          <Modal.Header>
            <Button
            variant="light"
            onClick={handleClose}
            >
            
              <i className="fa fa-times fa-sm " />
            </Button>
            <Modal.Title className="mr-4 ml-2">IKEA</Modal.Title>
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
          <Nav.Link href="#products"><h3>Products</h3></Nav.Link>
            <Nav.Link href="#rooms"><h4>Rooms</h4></Nav.Link>
            <Nav.Link href="#deals"><h5>Deals</h5></Nav.Link>
            
            <BootstrapSwitchButton
    checked={false}
    onlabel='Dark'
    offlabel='Light'
    onstyle="secondary"
    onChange={(checked= true) => {
      setDarkmode({ darkmode: checked })
      alert(checked)
    }
    }
/>
         
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
