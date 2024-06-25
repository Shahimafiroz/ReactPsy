import React from "react";
import { Component } from "react";


class Msg extends Component{

    constructor(){
        super()
        this.state ={
            mssg: 'welcome visitor'

        }
    }
    changeMessage(){
        this.setState({
            mssg: 'Thank You for Subscribing !'
        })
    }
    render(){
        return(<div>
            <h1>{this.state.mssg}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>)
    }
}

export default Msg