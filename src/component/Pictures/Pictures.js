import React, { useState, useEffect } from "react";
import PictureGallery from "./PictureGallery";
import BottomContent from "../Footer/BottomContent";
import ImageContainer from "../ImageContainer";
import axios from "axios";
import "./PictureGallery.css"


const Pictures = () => {
  //fetch data
  const [httpRes, setHttpRes] = useState([]);

  //componentDidMount
  useEffect(() => {
    // Make a request for a user with a given ID
    //      .get("https://bed-demo-personal-web-server.herokuapp.com/test1/hari")
    //https://bed-demo-personal-web-server.herokuapp.com/
    //http://localhost:5000/
    axios
      .get("https://bed-demo-personal-web-server.herokuapp.com/t/pictures")
      .then(function (response) {
        console.log(response.data);
        setHttpRes(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ImageContainer page="Pictures" />
      <div className="pic-gallery">
        {!httpRes
          ? { name: "", imgAddress: "", date: "" }
          : httpRes.map((el, index) => {
              return <PictureGallery key={index} value={el} />;
            })}
      </div>
      <BottomContent />
    </div>
  );
};

export default Pictures;
