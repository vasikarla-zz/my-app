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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person data={data}>Inside</Person>
        </header>
      </div>
    );
  }
}

export default App;
