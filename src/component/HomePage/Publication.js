import React from "react";
import "./Publication.css"
const Publication = () => {
  return (
    <>
      <div className="img-container">
        <img
          className="img-front"
          src="/Resource/image-1.jpg"
          alt="Image not available"
        />
        <div className="img-wrap">
          <img
            className="img-back"
            src="/Resource/image-2.jpg"
            alt="Image not available"
          />
        </div>
        <button className="download-btn"><i className="fa fa-download download-btn-fa"></i>Download from here</button>
      </div>
    </>
  );
};

export default Publication;
