import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './Components/LinkedListComp';
import MyMathComp from './Components/MyMathComp';
import CommunityComp from './Components/CommunityComp';



class App extends Component {

  onPassedFunction = () => {
    console.log("we are in the App function");
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <MyMathComp name="Hello World" func={this.onPassedFunction}/>
        <LinkedListComp name="Top" func={this.onPassedFunction}/>
        <CommunityComp name="Community" func={this.onPassedFunction}/>
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
