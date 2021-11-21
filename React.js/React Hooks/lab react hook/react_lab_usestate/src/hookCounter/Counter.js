import React, { useState } from "react";

export const Counter = () => {
  const [count, countUpdate] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "orange" }}>{count}</h1>
      <div>
        <button onClick={() => countUpdate(count + 1)}>plus</button>
        <button onClick={() => countUpdate(count - 1)}>minus</button>
        <button onClick={() => countUpdate(0)}>reset</button>
      </div>
    </div>
  );
};
