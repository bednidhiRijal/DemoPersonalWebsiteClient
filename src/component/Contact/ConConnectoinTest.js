import React, { useState } from "react";

var count = 1;
const ConConnectionTest = () => {
  const [value, setValue] = useState({});
  const btnClickHandler = (event) => {
    setValue("clicked" + count++);
    event.defaultPrevented = true;
    console.log(event);
    console.log(count)
  };
  return (
    <div
      style={{
        height: 100,
        width: "100%",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <p>hello testing ongoing here</p>
      <button
        type="button"
        className="btn-test"
        id="btn-test-1"
        style={{ backgroundColor: "blue", color: "red", padding: "5px" }}
        onClick={btnClickHandler}
      >
        click to connect server
      </button>
      <div>{value}</div>
    </div>
  );
};

export default ConConnectionTest;
