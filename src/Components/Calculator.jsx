import { useState } from "react";
import { Container, Display, Previous, Current, Button } from "../styles/Main";

const Calculator = () => {
  const [current,setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  const [operations, setOperations] = useState('')

  const appendValueHandler =(e) => {
    const value = e.target.getAttribute("data")
    if(value ==="." && current.includes('.')) return;
    setCurrent(current+value);
  }

  const delHandler= () => setCurrent(String(current).slice(0,-1));
  

  const clearHandler =() =>{
    setCurrent('')
    setPrevious("")
    setOperations("")
  }

  const chooseOptHandler=(e)=>{
    if(current === '') return
    if(previous !== ''){
      let value = compute()
      setPrevious(value)
    }
    else{
      setPrevious(current)
    }
    setCurrent('')
    setOperations(e.target.getAttribute('data'))
  }

  const eqlHandler =() =>{
    let value = compute()
    if(value === undefined || value== null) return
    setCurrent(value)
    setPrevious("")
    setOperations("")
  }

  const compute= () =>{
    let result;
    let prvNum = parseFloat(previous)
    let curNum = parseFloat(current)
    if(isNaN(prvNum) || isNaN(curNum)) return
    switch(operations){
      case '÷':
        result = prvNum / curNum;
        break;
      case 'x':
        result = prvNum * curNum;
        break;
      case '+':
        result = prvNum + curNum;
        break;
      case '-':
        result = prvNum - curNum;
        break;
        default:return
    }
    return result;
  }

  return (
    <Container>
      <Display>
        <Previous>{previous} {operations}</Previous>
        <Current>{current}</Current>
      </Display>
      <Button gridSpan={2} control onClick={clearHandler}>AC</Button>
      <Button onClick={delHandler}>DEL</Button>
      <Button opt data={'÷'} onClick={chooseOptHandler}>÷</Button>
      <Button data={7} onClick={appendValueHandler}>7</Button>
      <Button data={8} onClick={appendValueHandler}>8</Button>
      <Button data={9} onClick={appendValueHandler}>9</Button>
      <Button opt data={'x'} onClick={chooseOptHandler}>x</Button>
      <Button data={4} onClick={appendValueHandler}>4</Button>
      <Button data={5} onClick={appendValueHandler}>5</Button>
      <Button data={6} onClick={appendValueHandler}>6</Button>
      <Button opt data={'+'} onClick={chooseOptHandler}>+</Button>
      <Button data={1} onClick={appendValueHandler}>1</Button>
      <Button data={2} onClick={appendValueHandler}>2</Button>
      <Button data={3} onClick={appendValueHandler}>3</Button>
      <Button opt data={'-'} onClick={chooseOptHandler}>-</Button>
      <Button dec data={'.'} onClick={appendValueHandler}>.</Button>
      <Button data={0} onClick={appendValueHandler}>0</Button>
      <Button gridSpan={2} eql onClick={eqlHandler}>=</Button>
    </Container>
  );
};

export default Calculator;
