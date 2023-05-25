import { createRef } from "react";
import React from "react";

class Counter extends React.Component{
  msgRef = createRef()

  getValue = ()=>{
    console.log(this.msgRef.current.value)
  }
  render(){
    return(
      <>
        <input type="text" ref={this.msgRef}/>
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
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
