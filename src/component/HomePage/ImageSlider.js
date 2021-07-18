import React from "react";
import {Carousel} from "react-bootstrap"
import "./ImageSlider.css"
const ImageSlider = () => {
  return (
    <div className="carousel-div">
      <Carousel>
        <Carousel.Item className="carousel-item-container">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Laptop</h3>
          </Carousel.Caption>
          <h1 className="carousel-content-1">This web page is for educational purpose.</h1>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Space</h3>
          </Carousel.Caption>
          <h1 className="carousel-content-1">This web page is for educational purpose.</h1>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Ocean Beach</h3>
          </Carousel.Caption>
          <h1 className="carousel-content-1">This web page is for educational purpose.</h1>
        </Carousel.Item>
      </Carousel>
      <div className="static-image-cont">
      {/* http://www.baburambhattarai.com/public/assets/website/img/baburam.png */}
        <img className="static-image" src="./Resource/ali-choubin.png"></img>
      </div>
    </div>
  );
};

export default ImageSlider;
