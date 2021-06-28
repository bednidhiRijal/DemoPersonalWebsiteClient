import React from "react";
import "./UpdateCard.css";

const UpdateCard = (props) => {
  return (
    <>
      <div className="card-container-c">
        <div className="card-header-c">
          <a href="#">{props.headline}</a>
        </div>
        <div className className={`card-footer-c-${props.k}`}>
          <span className="clock-span">
            <a className="fa fa-clock-o fa-c"></a>
            <a className="date">{props.date}</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default UpdateCard;
