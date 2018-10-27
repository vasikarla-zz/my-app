import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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

  switchNameHandler = () => {
    console.log("Switch Handler");
    this.setState({
      persons: [
        {name: "Raj Vasikarla", age: 48},
        {name: "Ryan Vasikarla", age: 3}
      ]
    }) 
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.switchNameHandler}>Click Me!!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        </header>
      </div>
    );
  }
}

export default App;
