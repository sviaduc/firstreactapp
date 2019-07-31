import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component{
  state = {
    username: "Super Stan"
  };

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  };
  render(){
    return (
      <div className="App">
        <UserInput
            changed={this.usernameChangedHandler}
            currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Stan"/>
      </div>
    );
  }
}

export default App;
