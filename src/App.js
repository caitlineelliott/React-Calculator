import './App.css';
import { useState } from "react";
import React from 'react';

function DisplayOutput(props) {

  const backgroundColor = {
    backgroundColor: props.color,
    transition: 'all 500ms',
  }

  return (
    <input id="output" type="text" value={props.output} style={backgroundColor} readOnly />
  )
}

function Button(props) {
  return (
    <button id={props.value} onClick={props.onClick}>{props.label}</button>
  )
}

Number.parseFloat()
Number.parseInt()

const operation = [9, '+', 87, '*']

function Calculator() {
  let [userInput, setInput] = useState('');
  let [previousNum, setPrevNum] = useState('');
  let [currentNum, setCurrentNum] = useState('');
  let [operator, setOperator] = useState('');
  let [outputColor, setOutputColor] = useState('#FC466B');


  function addToInput(e) {
    userInput = userInput + e.target.id;
    setInput(userInput);
  }

  function addDecimal(e) {
    if (userInput.indexOf(".") === -1) {
      userInput = userInput + e.target.id;
      setInput(userInput);
    }
  }

  function addZero(e) {
    if (userInput !== "") {
      userInput = userInput + e.target.id;
      setInput(userInput);
    }
  }

  function negateNum() {
    if (userInput !== "") {
      userInput = userInput * -1;
      setInput(userInput);
    }
  }

  function calculatePercent() {
    if (userInput !== "") {
      userInput = userInput / 100;
      setInput(userInput);
    }
  }

  function clearInput() {
    setInput('');
    userInput = '';
    setOutputColor('#FC466B')
  }

  function storeOperator(e) {
    setOperator(e.target.id);
    previousNum = userInput;
    setPrevNum(previousNum);
    setInput('');
  }

  function evaluate() {
    currentNum = userInput;
    setOutputColor('#3F5EFB');
    if (operator === 'add') {
      setInput(parseFloat(previousNum) + parseFloat(currentNum));
    } else if (operator === 'subtract') {
      setInput(parseFloat(previousNum) - parseFloat(currentNum));
    } else if (operator === 'multiply') {
      setInput(parseFloat(previousNum) * parseFloat(currentNum));
    } else if (operator === 'divide') {
      setInput(parseFloat(previousNum) / parseFloat(currentNum));
    }
    setPrevNum('');
    setCurrentNum('');
  }

  return (
    <div id="calculator-container">
      <DisplayOutput output={userInput} color={outputColor} />
      <div id="btnContainer">
        <div id="col1">
          <div id="top-functions">
            <Button label='c' value={'clear'} onClick={clearInput} />
            <Button label='+/-' value={'+/-'} onClick={negateNum} />
            <Button label='%' value={'%'} onClick={calculatePercent} />
          </div>
          <div id="number-btns">
            <Button label={'7'} value={'7'} onClick={addToInput} />
            <Button label={'8'} value={'8'} onClick={addToInput} />
            <Button label={'9'} value={'9'} onClick={addToInput} />
            <Button label={'4'} value={'4'} onClick={addToInput} />
            <Button label={'5'} value={'5'} onClick={addToInput} />
            <Button label={'6'} value={'6'} onClick={addToInput} />
            <Button label={'1'} value={'1'} onClick={addToInput} />
            <Button label={'2'} value={'2'} onClick={addToInput} />
            <Button label={'3'} value={'3'} onClick={addToInput} />
            <Button label={'0'} value={'0'} onClick={addZero} />
            <Button label={'.'} value={'.'} onClick={addDecimal} />
          </div>
        </div>
        <div id="col2">
          <div id="operations">
            <Button label='÷' value={'divide'} onClick={storeOperator} />
            <Button label={'x'} value={'multiply'} onClick={storeOperator} />
            <Button label={'-'} value={'subtract'} onClick={storeOperator} />
            <Button label={'+'} value={'add'} onClick={storeOperator} />
            <Button label={'='} value={'='} onClick={evaluate} />
          </div>
        </div>
      </div>
    </div>
  )
}

function App(props) {
  return (
    <Calculator />
  )
}

export default App;