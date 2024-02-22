import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormLabel } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { actionRegisterAsync } from "../redux/actions/actionsRegisteruser";
import { Link } from "react-router-dom";

const RegisterFormik = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "NO cumple con el número min de caracteres")
      .max(50, "Excede el máximo")
      .required("Este campo es requerido"),
    lastName: Yup.string()
      .min(2, "NO cumple con el número min de caracteres")
      .max(50, "Excede el máximo")
      .required("Este campo es requerido"),
    email: Yup.string().email("Invalid email").required("Required"),
    pass: Yup.string()
      .min(6, "pass muy corto")
      .max(10, "Excede el máximo")
      .oneOf([Yup.ref("pass2"), "Los password No coinciden"])
      .required("Required"),
    pass2: Yup.string()
      .min(6, "Pass muy corto")
      .max(10, "Excede el máximo")
      .oneOf([Yup.ref("pass"), "Los password No coinciden"])
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(
      actionRegisterAsync(values.email, values.pass, values.firstName, values.lastName)
    );
  }
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          pass: "",
          pass2: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
         <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
         <FormLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>Nombre</FormLabel>
         <Field name="firstName" style={{ padding: '5px' }} />
         {errors.firstName && touched.firstName ? (
           <div style={{ color: 'red', fontSize: '14px' }}>{errors.firstName}</div>
         ) : null}

         <FormLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>Apellido</FormLabel>
         <Field name="lastName" style={{ padding: '5px' }} />
         {errors.lastName && touched.lastName ? (
           <div style={{ color: 'red', fontSize: '14px' }}>{errors.lastName}</div>
         ) : null}

         <FormLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>Email</FormLabel>
         <Field name="email" type="email" style={{ padding: '5px' }} />
         {errors.email && touched.email ? <div style={{ color: 'red', fontSize: '14px' }}>{errors.email}</div> : null}

         <FormLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>Contraseña</FormLabel>
         <Field name="pass" type="password" style={{ padding: '5px' }} />
         {errors.pass && touched.pass ? <div style={{ color: 'red', fontSize: '14px' }}>{errors.pass}</div> : null}

         <FormLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>Confirmar Contraseña</FormLabel>
         <Field name="pass2" type="password" style={{ padding: '5px' }} />
         {errors.pass2 && touched.pass2 ? <div style={{ color: 'red', fontSize: '14px' }}>{errors.pass2}</div> : null}

         <button type="submit" style={{ padding: '10px', background: 'blue', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>Enviar</button>
            <Button variant="outline-success" style={{ margin: "10px" }}>
          <Link to="/login">Login</Link>
        </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
