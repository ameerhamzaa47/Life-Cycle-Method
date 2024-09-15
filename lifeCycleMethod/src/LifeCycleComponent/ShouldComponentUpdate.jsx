import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        if(this.state.count>0 && this.state.count<10){
            return true;
        }
        else{
            return false;
        }
    }
  render() {
    return (
      <div>
        <hr/>
        <b>Should Component Update</b>
        <h1>Update Counter {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
        <hr/>
      </div> 
    )
  }
}
