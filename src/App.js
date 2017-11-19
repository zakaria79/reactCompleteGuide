import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Zakaria', age: 38 },
      { name: 'Yahia', age: 10 },
      { name: 'Meriem', age: 12 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: 'Abdallah', age: 6 },
        { name: 'Mohamed', age: 8 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:  [
        { name: 'Abdallah', age: 6 },
        { name: event.target.value, age: 38 },
        { name: 'Mohamed', age: 8 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1 className="App-title">Hi, I'am a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Zakaria')}>Switch Name
        </button>
        <Person
          onTruc={this.switchNameHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler.bind(this)}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
