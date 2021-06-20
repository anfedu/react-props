import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Home count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
