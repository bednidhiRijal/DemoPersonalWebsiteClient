import React, { useState } from "react";
import "./Subscribe.css";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { useFormik } from "formik";

const Subscribe = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length > 20) {
      errors.phone = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: async (values) => {
      await axios({
        method: "post",
        /* url: "http://localhost:5000/user/subscribe", */
        url:"https://bed-demo-personal-web-server.herokuapp.com/user/subscribe",
        data: `name=${values.name}&email=${values.email}&phone=${values.phone}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then(function (response) {
          if (response) {
            alert(JSON.stringify(values, null, 2));
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("submit form unsuccessfull");
        });
      formik.resetForm({});
    },
  });

  return (
    <div>
      <Container fluid="ls" className="subscribe-form-container">
        <Form.Row className="subscribe-form-row">
          <Form
            inline
            className="subscribe-form"
            onSubmit={formik.handleSubmit}
          >
            <Form.Group className="subscribe-form-group">
              <Form.Control
                type="text"
                id="name"
                value={formik.values.name || ""}
                name="name"
                placeholder="Name"
                className={`subscribe-form-control ${formik.touched.name && formik.errors.name ? "form-error" : null}`}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
              {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </Form.Group>
            <Form.Group className="subscribe-form-group">
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={formik.values.email || ""}
                placeholder="Username@gmail.com"
                className="subscribe-form-control"
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
              {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Form.Group>
            <Form.Group className="subscribe-form-group">
              <Form.Control
                type="tel"
                placeholder="Telephone"
                id="phone"
                value={formik.values.phone || ""}
                name="phone"
                className="subscribe-form-control"
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
              {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
            </Form.Group>
            <button type="submit" className="subscribe-form-button">
              Subscribe
            </button>
          </Form>
        </Form.Row>
      </Container>
    </div>
  );
};

export default Subscribe;
