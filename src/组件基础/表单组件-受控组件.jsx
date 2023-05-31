import React from "react";

class Counter extends React.Component{
  state = {
    message: 'this is message'
  }
  inputChange = (e) => {
    this.setState({message: e.target.value})
  }
  render(){
    return (
      <input type="text" 
      value={this.state.message}
      onChange={this.inputChange} />
    )
  }
}
function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
