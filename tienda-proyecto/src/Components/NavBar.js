import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionLogoutAsyn } from "../redux/actions/actionsLogin";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Mostrar modal solo si showModal es true y no se ha mostrado antes
    if (showModal && !localStorage.getItem("hasShownModal")) {
      setShowModal(true);
      // Marcar que el modal se ha mostrado antes
      localStorage.setItem("hasShownModal", true);
    }
  }, [showModal]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:'white', padding:'10px'}}>
        <Container fluid>
          <Navbar.Brand href="#" style={{color: '#FC462D'}}>La Tiendita</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" >
                <Link to="/*" style={{
                textDecoration: 'none'
              }}>Productos</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add" style={{
                textDecoration: 'none'
              }}>Add</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <p>{address}</p>{" "}
              {/* Renderiza la dirección almacenada en el estado */}
              <Button
                variant="outline-success"
                onClick={() => dispatch(actionLogoutAsyn())}
              >
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Donde quieres recibir tu pedido?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Para poder ofrecerte productos dentro de tu área, necesitamos tu
            dirección
          </p>
          <input
            type="text"
            placeholder="Medellin, Colombia"
            value={address}
            onChange={(e) => setAddress(e.target.value)} // Actualiza el estado address
          />
          <Button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Agregar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavBar;
