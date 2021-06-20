import React from "react";

export default function ({ count, setCount }) {
  return (
    <div style={{ marginTop: 100 }}>
      <div>Ini dari component</div>
      <div style={{ marginTop: 20 }}>{count}</div>
      <button
        style={{
          width: 100,
          height: 50,
          background: "blue",
          borderRadius: 9,
          marginTop: 10,
        }}
        onClick={() => setCount(count + 1)}
      >
        Add Count
      </button>
    </div>
  );
}
