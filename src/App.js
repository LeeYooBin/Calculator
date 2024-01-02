import { useState } from "react";
import style from "./App.module.css";
import Title from "./components/Title";
import Button from "./components/Button";
import Input from "./components/Input";
import Result from "./components/result";
import {
  handleButtonClick,
  handleDelete,
  handleResultChange,
  handleInputChange
} from "./utils/calculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className={style.content}>
      <Title>Calculator</Title>
      <div className={style.calculator}>
        <Input 
          value={input} 
          action={(e) => handleInputChange(e, setInput)} 
        />
        <Result>{result}</Result>
        <div className={style.button_container}>
          <Button action={() => handleDelete(setInput, setResult)} type="delete">C</Button>
          <Button action={() => handleButtonClick("()", input, setInput)} type="operations">()</Button>
          <Button action={() => handleButtonClick("%", input, setInput)} type="operations">%</Button>
          <Button action={() => handleButtonClick("/", input, setInput)} type="operations">/</Button>
          <Button action={() => handleButtonClick(7, input, setInput)} type="default">7</Button>
          <Button action={() => handleButtonClick(8, input, setInput)} type="default">8</Button>
          <Button action={() => handleButtonClick(9, input, setInput)} type="default">9</Button>
          <Button action={() => handleButtonClick("*", input, setInput)} type="operations">X</Button>
          <Button action={() => handleButtonClick(4, input, setInput)} type="default">4</Button>
          <Button action={() => handleButtonClick(5, input, setInput)} type="default">5</Button>
          <Button action={() => handleButtonClick(6, input, setInput)} type="default">6</Button>
          <Button action={() => handleButtonClick("-", input, setInput)} type="operations">-</Button>
          <Button action={() => handleButtonClick(1, input, setInput)} type="default">1</Button>
          <Button action={() => handleButtonClick(2, input, setInput)} type="default">2</Button>
          <Button action={() => handleButtonClick(3, input, setInput)} type="default">3</Button>
          <Button action={() => handleButtonClick("+", input, setInput)} type="operations">+</Button>
          <Button action={() => handleButtonClick("+/-", input, setInput)} type="default">+/-</Button>
          <Button action={() => handleButtonClick(0, input, setInput)} type="default">0</Button>
          <Button action={() => handleButtonClick(".", input, setInput)} type="default">.</Button>
          <Button action={() => handleResultChange(input, setInput, result, setResult)} type="equal">=</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
