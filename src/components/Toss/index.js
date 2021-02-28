import React, {Component, useState} from "react"

class Toss extends Component {
    state = {
        toss: ""
    }

    componentDidMount() {
        this.setState({
            toss: Math.floor(Math.random() * 2) ? "Head" : "Tail"
        })
    }

    render() {
        return (
            <>
                <div style={{width: '100%',height: '100vh', textAlign: "center"}}>
                    <h2 style={{"fontSize": "30px"}}>{this.state.toss}</h2>
                </div>
            </>
        )
    }
}

export default Toss;