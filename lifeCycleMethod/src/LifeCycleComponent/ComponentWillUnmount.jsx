import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }
  componentWillUnmount(){
    alert("jd")
  }
  render() {
    return (
      <div>
        <b>Component Will Unmount</b>
        {
            this.state.show?
            <h1>Hamza</h1>
            :<h1>Removed</h1>
        } 
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggel</button>
      </div>
    )
  }
}
