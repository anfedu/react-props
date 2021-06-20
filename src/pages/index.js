import React from "react";
import Component from "../component";

export default function ({ count, setCount }) {
  return (
    <>
      <div>Ini dari Home page</div>
      <Component count={count} setCount={setCount} />
    </>
  );
}
