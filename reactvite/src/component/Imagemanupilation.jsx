import React, { useState } from "react";
import rezero from "../images/rezero.png";

function Imagemanipulation() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const [red, setRed] = useState(20);
  const [green, setGreen] = useState(200);
  const [blue, setBlue] = useState(140);
  const [rotate, setRotate] = useState(0);

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

  function rotateImage() {
    setRotate(rotate + 30);
  }

  return (
    <div>
      <h2 style={{ color: "white", backgroundColor: "brown" }}>
        Image Manipulation using React
    
      </h2>

      <div
        style={{
          border: "2px solid red",
          height: "500px",
          width: "400px",
          marginLeft: "300px",
        }}
      >
        <img
          src={rezero}
          height={height}
          width={width}
          style={{ transform: `rotate(${rotate}deg)` }}
        />

        <div>
          <h2>Rezero height: {height}</h2>
          <h2>Rezero width: {width}</h2>
        </div>
      </div>

      <button onClick={enhanceHeight}>Enhance Height</button>
      <button onClick={enhanceWidth}>Enhance Width</button>
      <button onClick={decreaseHeight}>Decrease Height</button>
      <button onClick={decreaseWidth}>Decrease Width</button>
      <button onClick={rotateImage}>Rotate</button>
    </div>
  );
}

export default Imagemanipulation;
