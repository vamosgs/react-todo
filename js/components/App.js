import React, {Component} from 'react';
import List from './List.js';
import Add from './Add.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

        this.state = {
            items: [
                'task 1',
                'task 2',
                'task 3'
            ]
        }
    }

    handleAdd(event, task) {
        event.preventDefault();
        let TaskObj = {items:this.state.items};
        let newTaskArr = TaskObj.items.push(task);
        this.setState(TaskObj)
    }
    handleDelete(task) {
        let TaskObj = {items:this.state.items};
        delete TaskObj.items[task];
        this.setState(TaskObj)
    }
    handleEdit(task) {
        console.log('edit ' +task)
        let TaskObj = {items:this.state.items};
    }

    render() {
        return (
            <div>
                <List  delete={this.handleDelete} edit={this.handleEdit} items={this.state.items}/>
                <Add add={this.handleAdd}  />
            </div>     );
    }
}

export default App;
