import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(prop) {
        super()
        this.state = {
            secondsLeft: prop.initialCount
        }
    }
    render(){
        return(
            <p>{(this.state.secondsLeft === 0) ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
        )
    }
}