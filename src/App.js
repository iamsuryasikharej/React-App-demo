import React,{Component} from 'react';
// import logo from './logo.svg';
import "./App.css";
import {Welcome} from "./components/Welcome";
import {Greet} from "./components/Greet";
import {MyButton} from "./components/MyButton";

class  App extends  Component{
  render() {
    return (
        < div
    className = "App" >
            < Welcome name="surya" ><p>Hello </p></Welcome>

            < Welcome name="Ramu kaka" ><button>click me</button></Welcome>
            < Welcome name="Gulshan" > <p>Hello<MyButton></MyButton></p></Welcome>
            <Greet name="Sormila"><p>Childern of class component</p></Greet>
            < Welcome name="Ram" ><p>Hello</p></Welcome>
            < Welcome name="Shyam" > <p>Hello</p></Welcome>

        < /div>
  )
    ;
  }
}

export default App;
