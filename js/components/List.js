import React, {Component} from 'react';


class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, i) => <li key={i}>{item}
                        <button onClick={() => {this.props.delete(i)}}>Delete
                        </button>
                        <button onClick={() => {this.props.edit(i)}}>Edit</button>
                    </li>)}
                </ul>


            </div>     );
    }
}

export default List;
