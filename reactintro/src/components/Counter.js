import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incremant() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log("Callback Value : ", this.state.count)
            }
        ) // setState Ends
        console.log('after inc', this.state.count)
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        },
            () => {
                console.log("Callback DEcrement value : ", this.state.count)
            }
            // ()=>(console.log("Callback DEcrement value : " , this.state.count))
        )


        console.log('after dec', this.state.count)
    }


    reset() {
        this.setState({ count: 0 },
            () => console.log("Callback reset", this.state.count)
        )


        console.log('after reset ', this.state.count)
    }



    // reset(){
    //    this.setState({count : 0 } , () => (console.log("Callback reset") , this.state.count))
    // }

    render() {
        console.log('#################', this.state.count)
        return (
            <div>
                <h1>Count {this.state.count}</h1>
                <button onClick={() => this.incremant()}>increament</button>
                <button onClick={() => this.decrement()}>decrement</button>
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.incBy5}>increament By 5 </button>
                <button onClick={() => this.decBy5}>decreament By 5 </button>
            </div>
        )
    }
}

export default Counter
