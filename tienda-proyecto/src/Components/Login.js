import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../Hooks/useForm";
import { actionFacebook, actionGoogle, actionLoginAsyn } from "../redux/actions/actionsLogin";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginContainer } from "../Styles/Styles";
const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionLoginAsyn(email, pass));
    reset();
  };
  return (
    <div className="divLogin">
      <loginContainer>
      <h1>Bienvenido a la Tiendita</h1>
      <h4>Inicia sesión para empezar a comprar</h4>
      </loginContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="user_email@email.com"
              name="email"
              value={formValue.email}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              name="pass"
              value={formValue.pass}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Button type="submit" style={{ margin: "10px" }}>
          Login
        </Button>
        <Button
          onClick={() => dispatch(actionGoogle())}
          style={{ margin: "10px" }}
        >
          Google
        </Button>
        <Button
          onClick={() => dispatch(actionFacebook())}
          style={{ margin: "10px" }}
        >
          Facebook
        </Button>
      </Form>
      <Button className="reg" size="lg" variant="outline-warning" style={{ margin: "10px", backgroundColor:  "#edd000", textAlign: "center",}}>
        <Link to="/register">Usuario Nuevo / Registrar</Link>
      </Button>
    </div>
    
  );
};

export default Login;
