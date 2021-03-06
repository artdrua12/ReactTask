import React, { Component } from 'react'
import { connect } from "react-redux";

class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.addTrack = this.addTrack.bind(this);
        this.handleonChange = this.handleonChange.bind(this);
        this.delete = this.delete.bind(this);
    }

    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = "";
    }
    handleonChange(event) {
        this.setState({ text: event.target.value })
    }
    delete(index) {
        this.props.onDeleteTrack(index);
    }

    render() {
        return (
            <div className="flex">
                <div className="left">
                    <input
                        type="text"
                        placeholder="Enter text"
                        onChange={this.handleonChange}
                        ref={(input) => { this.trackInput = input }}
                    ></input>
                    <button onClick={this.addTrack} className="submitBtn">Add text</button>
                </div>
                <div className="right">
                    <h3>List:</h3>
                    <ul>
                        {this.props.tracks.map((track, index) =>
                            <li key={index}>{track}<button onClick={() => this.delete(index)} className="btn">delete text</button> </li>
                        )}
                    </ul>
                </div>

            </div>
        )
    }
}

export default connect(
    state => ({
        tracks: state.redusertsk1
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({ type: 'ADD_TRACK', playload: trackName })
        },
        onDeleteTrack: (index) => {
            dispatch({ type: 'DELETE_TRACK', playload: index })
        }
    })
)(Task1); 