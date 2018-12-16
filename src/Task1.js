import React, { Component } from 'react'
import './Task1.css';

class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            list: ["a","b","c"]
        }
        this.onClick = this.onClick.bind(this);
        this.handleonChange = this.handleonChange.bind(this);
        this.delete= this.delete.bind(this);
    }

    onClick() {
        console.log("submit");
        let temp = this.state.list;
        temp.push(this.state.text);
        this.setState({list:temp});
    }
    handleonChange(event) {
        this.setState({ text: event.target.value })
    }
    delete(index){
        console.log(index);
    }

    render() {
        return (
            <div >
                <input
                    type="text"
                    placeholder="Enter text"
                    value={this.state.email}
                    onChange={this.handleonChange}
                    className="emailFild"
                ></input>
                <button onClick = {this.onClick} className="submitBtn">Add text</button>
                <ul>
                    {this.state.list.map((item,index)=>
                    <li key ={index}>{item}<button onClick = {()=>this.delete(index)}>delete text</button> </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Task1