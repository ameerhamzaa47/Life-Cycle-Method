import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super()
        this.state={
            name:"Hamza"
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }

  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"M Hamza"})}}>Update</button>
      </div>
    )
  }
}
