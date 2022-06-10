import React from "react";
import "./Counter.scss";

function Counter({ count }) {
  return (
    <div className="counter">
      <h2 className="counter__score">Score: {count}</h2>
    </div>
  );
}

export default Counter;
