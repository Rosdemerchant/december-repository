import React from 'react';
import rd from "./LinkedList";

class LinkedListComp extends React.Component {

 onNew(e) {
    let val = document.getElementById("newNodeTxt").value;
 }
  
render() {
  return (
    <div>
      <h1>LinkedList</h1>
      <button onClick={this.onNew}>New</button>
      <button onClick={this.onNew}>Add</button>
      <br/>
      <input id = "newNodeTxt"></input><br/>
      </div>
    );
  }
}

export default LinkedListComp;