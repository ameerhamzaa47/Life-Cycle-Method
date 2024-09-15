import React,{Component} from "react";
class FirstLifeCycle extends Component{
    constructor(){
        super()
        this.state={
            data:"Ay hay oye hoy"
        }
    }
    render(){
        return(
            <h1>{this.state.data}</h1>
        )
    }
}
export default FirstLifeCycle;