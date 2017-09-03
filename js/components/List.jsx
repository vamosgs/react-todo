import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Delate from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/Edit';
import Save from 'material-ui/svg-icons/content/Save';
import Divider from 'material-ui/Divider';

class ListA extends Component {

    render() {

        return (
            <div>
                <ul>
                    <List>
                        {
                            this.props.items.map((item, i) => <li key={i}>
                            <ListItem primaryText={item} rightIcon={this.props.editing ? <Save onClick={(e) => {
                                this.props.edit(i, e)
                            }} /> : <Edit onClick={(e) => {
                                this.props.edit(i, e)
                            }}/>}  leftIcon={ <Delate onClick={() => {
                                this.props.delete(i)
                            }}/>} />

                            </li>)
                        }
                    </List>
                </ul>


            </div>     );
    }
}

export default ListA;
