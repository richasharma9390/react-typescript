import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Demo from './demo';
import Timer from './demo';

class App extends Component{
 
//  let firstvalue: string = 'Tom';
//  let firstvalue: number = 32;
//  let firstvalue: number[] = [1,2,3];
  // let firstvalue: Array<string> = ['1','3'];
  //tuple
 // let atuple: [string, number] = ['Many',123];
  //enum
 // enum Code{ first = 1, second = 2};
  //any
  //let firstval : any = 'Many' ; //|| just for demo purpose
  //void
  // const warning = (): void =>{
  //   console.log('Warning!');   
  // }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
         the type of {firstval} is {typeof firstval}!
        </p> */}
        <Message/>
        {/* <Demo timer={2000}/> */}
        {/* <Timer /> */}
      </header>
    </div>
  )
  }
}

export default App;
