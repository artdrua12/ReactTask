import React, { Component } from 'react'
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2500
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, value) => {
        // this.setState({ value });
        this.props.onAddValue(value)
    };
    render() {
        return (
            <div className="flex">
                <div className="left tsk2">
                    <Typography id="label">{this.props.obj.curentValue}</Typography>
                    <Slider

                        value={this.props.obj.curentValue}
                        aria-labelledby="label"
                        onChange={this.handleChange}
                        min={0}
                        max={5000}
                        step={100}
                    />
                </div>
                <div className="right">
                    <h3>Counter:</h3>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        obj: state.redusertsk2
    }),
    dispatch => ({
        onAddValue: (value) => {
            dispatch({ type: 'ADD_VALUE', playload: value })
        }
    })
)(Task2); 