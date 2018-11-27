import React from "react";
import "./TodoLists.css";
import Edit from './Edit'



export default class TodoLists extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     el: []

  //   }
  // }
  render() {

    let { description, deadline, done, id, handleClick, removeItem, changeEv } = this.props;
    // handleUpdate = (index) => {
    //   this.setState({
    //     el: [index.target.value]
    //   })
    // }
    return (
      <div className="list">

        <ul>
          <li>

            <input type="checkbox" defaultChecked={done} onChange={handleClick} />


            <label>{description} / {deadline} {done}/    </label>
            <button id='removeBtn' type='submit' onClick={removeItem}> X</button>

            {/* <Edit changeEv={this.handleUpdate} value={description} /> */}

          </li>
        </ul>

      </div>
    );
  }
}
