import react from "react";
import rezero from "../images/rezero.png";
import { useState } from "react";

function Imagemanupulation() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  function enhanceHeight() {
    setHeight(height + 10);
  }

  function enhanceWidth() {
    setWidth(width + 10);
  }

  function decreaseHeight() {
    setHeight(height - 10);
  }

  function decreaseWidth() {
    setWidth(width - 10);
  }

  return (
    <div>
      <h1 style={{ color: "white", backgroundColor: "red" }}>
        Image Manipulation
      </h1>

      <div
        style={{
          border: "2px solid blue",
          margin: "300px",
          height: "400px",
          width: "300px",
        }}
      >
        <img src={rezero} height={height} width={width} />

        <div>
          <h2>Height: {height}</h2>
          <h2>Width: {width}</h2>
        </div>
      </div>

      <button onClick={enhanceHeight}>Enhance Height</button>
      <button onClick={enhanceWidth}>Enhance Width</button>
      <button onClick={decreaseHeight}>Decrease Height</button>
      <button onClick={decreaseWidth}>Decrease Width</button>
    </div>
  );
}


export default Imagemanupulation;
