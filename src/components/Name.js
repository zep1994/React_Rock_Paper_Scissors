import React from 'react'

class Name extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                names: ["Tom Matlock", "Tiff is the coolest", "Daria likes cold Tea"],
                count: 0
            }
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <p onClick={()=>alert(this.state.count)}>{this.state.count}</p><br />
                
                <ul>
                    {this.state.names.map(name => (
                        <li onClick={this.handleClick} key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Name