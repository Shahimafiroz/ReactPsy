import { Component } from "react";
import React from "react";


class WelcomeClassComp extends Component{

    render () {
        return(
            <div>
                <h1>This is {this.props.name} a.k.a {this.props.heroname}</h1>
                {/* <h1>a.k.a {this.props.heroname}</h1> */}
          
            </div>

    )

    }
}

export default WelcomeClassComp;