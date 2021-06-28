import React from "react";
import ImageSlider from "./ImageSlider";
import Body from "./Body";
import BottomContent from "../Footer/BottomContent";


const Home = () =>{
    return (
        <div>
          <ImageSlider />
          <Body></Body>
          <BottomContent />
        </div>
      );
}

export default Home;