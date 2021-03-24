import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    sushi: [],
    currentIndex: 0,
    money: 100,
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({sushi: data}))
  }

  nextFour = () => {
    this.setState({currentIndex: this.state.currentIndex + 4})
  }

  eatASushi = sushi => {
    
  }

  render() {

    const {sushi, currentIndex} = this.state

    return (
      <div className="app">
        <SushiContainer 
          sushi={sushi.slice(currentIndex, currentIndex + 4)}
          nextFour={this.nextFour}
        />
        <Table />
      </div>
    );
  }
}

export default App;