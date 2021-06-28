import React from "react";
import "./Subscribe.css";
import { Container, Form, Button} from "react-bootstrap";
const Subscribe = () => {
  return (
    <div>
      <Container fluid="ls" className="subscribe-form-container">
        <Form.Row className="subscribe-form-row">
          <Form inline className="subscribe-form">
            <Form.Group className="subscribe-form-group">
              <Form.Control type="text" placeholder="Name" className="subscribe-form-control" />
            </Form.Group>
            <Form.Group className="subscribe-form-group">
              <Form.Control type="email" placeholder="Username@gmail.com" className="subscribe-form-control" />
            </Form.Group>
            <Form.Group className="subscribe-form-group">
              <Form.Control type="tel" placeholder="Telephone" className="subscribe-form-control"/>
            </Form.Group>
            <Button type="subscribe" className="subscribe-form-button">Subscribe</Button>
          </Form>
        </Form.Row>
      </Container>
    </div>
  );
};

export default Subscribe;
