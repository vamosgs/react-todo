import React, {Component} from 'react';
import List from './List.js';
import Add from './Add.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            items: [
                'task 1',
                'task 2',
                'task 3'
            ],
            editing: false,

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
    handleSave (e) {
        this.setState({saving:e.target.value});
    }
    handleEdit(task,event) {
        let obj = this.state;
        obj.editing = this.state.editing ? false : true;
        if (obj.editing) {
            obj.items[task] = <input onChange={(e)=>{this.handleSave(e)}} defaultValue={obj.items[task]} type="text"/>;
            this.setState(obj);
        } else {
            obj.items[task] = this.state.saving;
            this.setState(obj);
        }
    }

    render() {
        return (
            <div className="App">
                <List  editing={this.state.editing} delete={this.handleDelete} edit={this.handleEdit} items={this.state.items}/>
                <Add add={this.handleAdd}  />
            </div>     );
    }
}

export default App;
