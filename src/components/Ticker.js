import React from 'react'
import '../App.css';

class Ticker extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                time: 0
        }
}

    handleClick = () => {
        this.setState(prevState => ({
            time: prevState.time + 1
        }))
    }
    
    handleSubClick = () => {
        this.setState(prevState => ({
            time: prevState.time - 1
        }))
    }

    render() {
        return (
            <div className="ticker">
                <label className="time">{this.state.time}</label><br />
                <button onClick={this.handleClick}>+</button>
                <button onClick={this.handleSubClick}>-</button>
            </div>
        )
    }
}

export default Ticker