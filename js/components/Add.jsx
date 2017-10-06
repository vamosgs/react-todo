import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
class Add extends Component {
    constructor(props) {
        super(props);
        this.handleTask = this.handleTask.bind(this);
        this.handleDefault = this.handleDefault.bind(this);
        this.handleClear = this.handleClear.bind(this);
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
    handleDefault(e) {
        e.preventDefault();
        // this.refs.field.state.searchText = '';

    }
    handleClear() {
        console.log('clear')
    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleDefault}>
                    <AutoComplete
                        ref={'field'}
                        hintText="Add Task"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleTask}
                    />
                    <FlatButton  label="ADD"  onClick={ (event) => {
                        this.props.add(event, this.state.dataSource)
                        this.refs.field.refs.searchTextField.input.value = '';
                    }}/>

                </form>
            </div>     );
    }
}

export default Add;
