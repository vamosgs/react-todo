import React, { Component } from 'react';
import ListA from './List.jsx';
import Add from './Add.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import Circle from 'react-preloaders/Preloaders/Circle.jsx';
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.getNewVal = this.getNewVal.bind(this);
        this.state = {
            items: [
                {
                    name: 'task1',
                    editing: false
                }
            ],
            open: false,
            editedtext: null
        }
    }

    handleAdd(event, task) {
        event.preventDefault();
        if (task.length === 0 || task[0] === '') {
            this.setState({
                open: true,
            });
        } else {
            this.setState({ ...this.state.items, items: [...this.state.items, { name: task, editing: false }] })
        }
    }

    handleDelete(task) {
        let TaskObj = { items: this.state.items };
        TaskObj.items.splice(task, 1);
        this.setState(TaskObj)
    }

    handleSave(e, i) {
        let obj = this.state;
        obj.items[i].name = this.state.editedtext;
        obj.items[i].editing = false;
        this.setState(obj)
    }

    handleEdit(task, event) {
        let thisTask = this.state.items[task].name;
        this.setState({
            editedtext: thisTask
        })
        let nextState = this.state;
        nextState.items[task].editing = !this.state.editing;
        if (nextState.items[task].editing) {
            nextState.items[task].name = <input ref={input => this.Editing = input} className='editing' onChange={this.getNewVal} noValidate defaultValue={nextState.items[task].name} type="text" />;
        }
    }
    getNewVal(e) {
        this.setState({
            editedtext: e.target.value
        });
    }
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Circle />
                    <Snackbar
                        open={this.state.open}
                        message="Can't Add empty task or Task already exist"
                        autoHideDuration={2000}
                        onRequestClose={this.handleRequestClose}
                    />
                    <ListA save={this.handleSave} delete={this.handleDelete} edit={this.handleEdit}
                        items={this.state.items} />

                    <Add addTask={this.handleAdd} />
                </div>
            </MuiThemeProvider>);
    }
}

export default App;
