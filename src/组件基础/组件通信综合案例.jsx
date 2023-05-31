import React from 'react'

function ComA({id, name, price,info, delHandler}) {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => delHandler(id)}></button>
    </>
  )
}
class App extends React.Component {
  state = {
    list:[
      {id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折'},
      {id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折'},
      {id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折'}
    ]
  }

  delHandler = (id)=>{
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <ComA 
            key={item.id} 
            {...item}
            delHandler = {this.delHandler}
          />
        ))}
      </div>
    )
  }
}

export default App