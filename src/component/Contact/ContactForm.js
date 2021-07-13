import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import FormData from "form-data";

const ContactForm = () => {
  const [fieldState, setFieldState] = useState({ fields: {}, error: {} });

  const validationHandler = () => {
    let isFormValid = true;
    let { fields } = fieldState;
    let { error } = fieldState;

    if (!fields.name) {
      error["name"] = "Name cannot be empty";
      isFormValid = false;
    }
    if (!fields.email) {
      error["email"] = "Email cannot be empty";
      isFormValid = false;
    }
    if (!fields.phone) {
      error["phone"] = "phone cannot be empty";
      isFormValid = false;
    }
    if (!fields.message) {
      error["message"] = "Message cannot be empty";
      isFormValid = false;
    }
    setFieldState({ fields, error });
    console.log(error);
    return isFormValid;
  };
  const contactSubmitHandler = async (e) => {
    e.preventDefault();
    
    if (validationHandler()) {
      let bodyFormData = new FormData();
      bodyFormData.append("name",fieldState.fields.name)
      bodyFormData.append("email",fieldState.fields.email)
      bodyFormData.append("phone",fieldState.fields.phone)
      bodyFormData.append("message",fieldState.fields.message)
 
      await axios({
        method: "post",
        url: "https://bed-demo-personal-web-server.herokuapp.com/user",
        data: bodyFormData,
        headers: {"Content-Type": "multipart/form-data"},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      alert("submit form successfully");
      
      //document.getElementById("contactForm").reset();
      
      e.target.reset();
    } else {
      alert("Error on form submission");
    }
  };

  const changeHandler = (fieldName, e) => {
    let fieldsTem = fieldState.fields;
    fieldsTem[fieldName] = e.target.value;
    setFieldState({ fields: fieldsTem, error: {} });
  };

  const[httpRes, setHttpRes] = useState([])

  //componentDidMount
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://bed-demo-personal-web-server.herokuapp.com/test1/hari")
      .then(function (response) {
        console.log(response.data);
        setHttpRes(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);


  return (
    <div>
      <div><p>Server response</p>{httpRes.map((el,i)=>{return(<p key = {i}>age: {el.age}, name: {el.name}</p>)})}</div>
      <h1 className="contact-form-headline">Stay in touch</h1>
      <div></div>
      <Form
        className="contact-form"
        onSubmit={contactSubmitHandler}
        id="contactForm"
      >
        <Form.Group>
          <Form.Control
            id="name"
            type="name"
            placeholder="Name"
            onChange={changeHandler.bind(this, "name")}
          ></Form.Control>
          <span className="error">{fieldState.error.name}</span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="frm-control"
            type="email"
            placeholder="Email"
            onChange={changeHandler.bind(this, "email")}
          ></Form.Control>
          <span className="error">{fieldState.error.email}</span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Phone / Mobile"
            onChange={changeHandler.bind(this, "phone")}
          ></Form.Control>
          <span className="error">{fieldState.error.phone}</span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Message"
            onChange={changeHandler.bind(this, "message")}
            rows={4}
          ></Form.Control>
          <span className="error">{fieldState.error.message}</span>
        </Form.Group>
        <Button className="btn-submit" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
