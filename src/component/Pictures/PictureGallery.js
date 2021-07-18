import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./PictureGallery.css";

const PictureGallery = (props) => {
  return (
    <div>
      <Card className="pic-container">
        <Card.Img variant="top" id="card-img1" src={props.value.imgAddress} />
        <Card.Body>
          <Card.Title>{props.value.name}</Card.Title>
          <Card.Text>{props.value.date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PictureGallery;
