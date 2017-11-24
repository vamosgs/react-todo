import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Delate from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/Edit';
import Save from 'material-ui/svg-icons/content/Save';
import propTypes from 'prop-types';

const ListA = props => {
    return (
        <div>
            <ul>
                <List>
                    {
                        props.items.map((item, i) => <li key={i}>
                            <ListItem primaryText={item.name} rightIcon={item.editing ? <Save onClick={(e) => {
                                props.save(e, i)
                            }} /> : <Edit onClick={(e) => {
                                props.edit(i, e)
                            }} />} leftIcon={<Delate onClick={() => {
                                props.delete(i)
                            }} />} />
                        </li>)
                    }
                </List>
            </ul>
        </div>
    )
}
ListA.propTypes = {
    items: propTypes.array,
    save: propTypes.func,
    delete: propTypes.func,
    edit: propTypes.func
}

export default ListA;
