import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState(randomColor)

  function handleChangeColor(){
    const newColor = getRandomColor()
    const newChildColor = getRandomColor()
    setChildColor(newChildColor)
    setColor(newColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child handleChangeColor={handleChangeColor} childColor={childColor} />
    <Child handleChangeColor={handleChangeColor} childColor={childColor} />
    </div>
  );
}

export default Parent;
