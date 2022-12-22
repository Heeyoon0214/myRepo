import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const string1: string = "typescript";
  const string2: string = "testing";
  const number1: number = 1;
  const number2: number = 2;
  const Do: boolean = true;
  const undo: boolean = false;
  const list1: number[] = [1, 2, 3];
  const list2: Array<number> = [4, 5, 6];
  const list3: string[] = ["A", "B", "C"];

  function plus(a: number, b: number) {
    return a + b;
  }
  function add(a: string, b: string) {
    return a + " " + b;
  }

  let x: [string, number];
  x = ["hello", 10]; // 가능

  return (
    <div>
      {string1}
      <br />
      {number1}
      <br />
      {plus(number1, number2)}
      <br />
      {add(string1, string2)}
      <br />
      {Do}
      <br />
      {undo}
      <br />
      {list1}
      <br />
      {list2}
      <br />
      {list3}
    </div>
  );
}

export default App;
