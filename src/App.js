import React from 'react';
import './App.css';
import DogList from './DogList';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DogList/>
      </div>
    );
  }
}

export default App;
