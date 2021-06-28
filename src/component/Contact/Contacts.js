import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import ContactForm from "./ContactForm"
import "./ContactForm.css"
const Contacts = () =>{
    return (<div>
    <Container>
        <Row>
            <Col>
                <ContactForm/>
            </Col>
            <Col>
                <h1 className="contact-form-headline">Private Secretariat</h1>
                <p className="contact-form-email"><i className="fa fa-envelope"></i>Email: <a href="#">mail@bharati.com</a></p>
            </Col>
        </Row>
    </Container>
    </div>)
}

export default Contacts;