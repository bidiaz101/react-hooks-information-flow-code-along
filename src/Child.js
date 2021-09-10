import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleChangeColor, childColor, setChildColor }) {
  return <div className="child" style={{ backgroundColor: childColor }} onClick={handleChangeColor}/>;
}

export default Child;
