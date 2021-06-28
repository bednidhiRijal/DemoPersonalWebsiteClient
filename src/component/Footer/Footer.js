import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <footer>
        <Container fluid className="footer-container">
          <Row className="footer-row">
            <Col lg={8}>
              <ul>
                <li className="li-1">
                  <a href="#">Biography</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Documents</a>
                </li>
                <li>
                  <a href="#">Program</a>
                </li>
                <li>
                  <a href="#">Comments</a>
                </li>
                <li>
                  <a href="#">In the eyes of others</a>
                </li>
                <li>
                  <a href="#">Curiosity / Suggestions</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} className="icon-col">
              <span>
                <a href="#" className="fa fa-facebook fa-f"></a>
                <a href="#" className="fa fa-twitter fa-f"></a>
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
