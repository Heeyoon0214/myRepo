import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const string1: string = "typescript";
  const string2: string = "testing";
  const number1: number = 1;
  const number2: number = 2;
  function plus(a: number, b: number) {
    return a + b;
  }
  function add(a: string, b: string) {
    return a + " " + b;
  }

  return (
    <div>
      {string1}
      <br />
      {number1}
      <br />
      {plus(number1, number2)}
      <br />
      {add(string1, string2)}
    </div>
  );
}

export default App;
