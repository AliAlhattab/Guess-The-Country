import React from "react";
import "./Counter.scss";

function Counter({ count }) {
  return (
    <div>
      <h2>Score: {count}</h2>
    </div>
  );
}

export default Counter;
