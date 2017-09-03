import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
class Add extends Component {
    constructor(props) {
        super(props);
        this.handleTask = this.handleTask.bind(this);
        this.state = {
            dataSource: [],
            task: ''
        }
    }

    handleTask(value) {
        this.setState({
            dataSource: [
                value
        ]
        })
    }

    render() {
        return (
            <div>
                <form >
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleTask}
                    />
                    <FlatButton label="ADD" onClick={(event) => {
                        this.props.add(event, this.state.dataSource)
                    }}/>
                </form>
            </div>     );
    }
}

export default Add;
