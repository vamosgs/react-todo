import React, {Component} from 'react';


class Add extends Component {
    constructor(props) {
        super(props);
        this.handleTask = this.handleTask.bind(this);
        this.state = {
            task: ''
        }
    }

    handleTask(event) {
        event.preventDefault();
        this.setState({
            task: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.task}</p>
                <form onSubmit={(event) => {
                    this.props.add(event, this.state.task)
                }}>
                    <input onChange={this.handleTask} type="text"/>
                    <button type="submit">Add</button>

                </form>
            </div>     );
    }
}

export default Add;
