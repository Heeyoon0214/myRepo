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
  x = ["hello", 10];

  enum Color1 {
    Red,
    Green,
    Blue,
  }
  let colorName1: string = Color1[2]; // colorName1 = Blue

  enum Color2 {
    Red = 2,
    Green,
    Blue,
  }
  let colorName2: string = Color2[3]; // colorName2 = Green

  let notSure: any = 4;
  notSure = "문자열일수도 있다";
  notSure = false;

  let list: any[] = [1, true, "free"];

  function warnUser(): void {
    alert("This is my warning message");
  } // void 는 반환이 없는 함수, 변수는 undefined거나 null이다.

  let u: undefined = undefined;
  let n: null = null;

  let someValue: any = "This is a string";
  let strLength: number = (someValue as string).length;

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
