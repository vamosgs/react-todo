import React, {Component} from 'react';


class List extends Component {

    render() {

        return (
            <div>
                <p></p>
                <ul>
                    {
                        this.props.items.map((item, i) => <li key={i}>
                            <button>+</button>
                            {item}
                        <button onClick={() => {this.props.delete(i)}}>Delete
                        </button>
                         <button onClick={(e) => {this.props.edit(i,e)}}>{this.props.editing ? 'Save' :  'Edit'} </button>
                    </li>)
                    }
                </ul>


            </div>     );
    }
}

export default List;
