import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Event from './Person/Event';
import faker from 'faker';

var data = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  age:  faker.random.number({ min: 12, max: 60 }),
  card: faker.helpers.createCard()
};

class App extends Component {
  state = {
    persons: [
      {name: "Raj", age: 38},
      {name: "Ryan", age: 3}
    ]
  }

  switchNameHandler = (name, age) => {
    console.log("Switch Handler");
    this.setState({
      persons: [
        {name: name, age: age}
      ]
    }) 
  }

  doubleClickHandler = () => {
    console.log("doubleClickHandler");
    this.setState({
      persons: [
        {name: "Sasha Vasikarla", age: 48},
        {name: "Ryan Vasikarla", age: 3}
      ]
    }) 
  }

  onWheelHandler = () => {
    console.log("onWheel Handler");
    this.setState({
      persons: [
        {name: "Swetha Vasikarla", age: 48},
        {name: "Ryan Vasikarla", age: 3}
      ]
    })     
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.switchNameHandler}>Click Me!!</button>
        <input type="text" onDoubleClick={this.doubleClickHandler} onWheel={this.onWheelHandler}></input>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, faker.name.findName(), faker.random.number({max: 100}))}/>
          {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, faker.name.findName())}/> */}
          <Event/>
        </header>
      </div>
    );
  }
}

export default App;
