
import { Component } from 'react';
import FlintstoneCreation from './FlintstoneCreation'
import FlintstoneSection from './FlintstoneSection'

import './App.css';

class App extends Component {

  state = {
    flintstones: [
      {name: 'Fred FlintStone'},
      {name: 'Wilma FlintStone'}
    ]
  }

addFlintstone = (flintstone) => {
  this.setState({ flintstones: [...this.state.flintstones, flintstone]
  })
}

  render(){
    return (
      <div className="App">
        <FlintstoneCreation addFlintstone={this.addFlintstone}/>
        <FlintstoneSection flintstones={this.state.flintstones}/>
      </div>
    );

  }
}

export default App;
