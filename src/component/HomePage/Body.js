import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import PersonalIntro from "./PersonalIntro";
import SideBarContent from "./SideBarContent";
import Update from "./Update"
const Body = () => {
  return (
    <div>
      <Container style={{marginTop:60, marginBottom:30}}>
        <Row>
          <Col lg={3}><SideBarContent/></Col>
          <Col lg={5}><PersonalIntro/></Col>
          <Col lg={4}><Update></Update></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
