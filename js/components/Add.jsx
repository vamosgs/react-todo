import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class Add extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            value: ''
        }
    }

    handleAdd(event) {
        this.props.addTask(event, this.state.value);
        this.setState({ value: '' })
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <TextField
                    id="text-field-controlled"
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Add tasks to list"
                    floatingLabelFixed={false}
                />
                <FlatButton label="ADD" color='primary' onClick={this.handleAdd} />

            </div>
        )
    }
}

Add.PropTypes = {
    addTask: PropTypes.func
}

export default Add;
