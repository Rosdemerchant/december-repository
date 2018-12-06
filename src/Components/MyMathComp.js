import React from 'react';
import rd from './MyMath'; 

class MyMathComp extends React.Component {


  add = () => {
    console.log('im in add');

    /*let n = document.getElementById('input1');
    console.log('n:', n);
    let v = n.value;
    console.log('v:', v);
    */
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let d = document.getElementById('result');
    d.value = rd.add(parseInt(a), parseInt(b));
  }

  subtract = () => {
    console.log('im in subtract');
    let a = document.getElementById('input1').value;
    let ai = parseInt(a);
    let b = document.getElementById('input2').value;
    let bi = parseInt(b);
    let c = rd.subtract(ai,bi);
    console.log("im in c subtract", c);
    let d = document.getElementById('result');
    d.value = c;
  }

  multiply = () => {
    console.log('im in multiply');
    let a = document.getElementById('input1').value;
    let ai = parseInt(a);
    let b = document.getElementById('input2').value;
    let bi = parseInt(b);
    let c = rd.multiply(ai,bi);
    console.log("im in c mult", c);
    let d = document.getElementById('result');
    d.value = c;
  }
  
  oddEven = () => {
    console.log('im in oddEven');
    let a = document.getElementById('input1').value;
    let d = document.getElementById('result');
    d.value = rd.oddEven(a);
  }

  math2 = () => {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let f = document.getElementById("dictStr").value;
    let answer = document.getElementById("result");
    console.log('i am in result', answer);
    answer.value = rd.math2(f,parseInt(a), parseInt(b));
  };

  render() {
   return (
      <div className = "math-function">
        <h1>MyMath</h1>
        <br/>
        <input id ='input1' name='input1' rows = '2' cols = '10'></input>
        <input id ='input2' name='input2' rows = '2' cols = '10'></input><br/>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button><br/>
        <button onClick={this.oddEven}>oddEven</button><br/>
        <input id ='result'></input>
        <button onClick={this.math2}>math2</button>
        <input id="dictStr" type="text" ></input>
        <br/> 
      </div>

      );

    }

  }

export default MyMathComp;