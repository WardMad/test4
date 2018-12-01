import React from "react";
import "./TodoLists.css";
import Edit from './Edit'



export default class TodoLists extends React.Component {

  render() {

    let { description, deadline, done, id, removeItem, changeEv, handleChck } = this.props;
    return (
      <div className="list">

        <ul>
          <li>

            <input type="checkbox" defaultChecked={done} onChange={handleChck} />


            <label>{description} / {deadline} {done}/    </label>
            <button id='removeBtn' type='submit' onClick={removeItem}> X</button>

            {/* <Edit changeEv={this.handleUpdate} value={description} /> */}

          </li>
        </ul>

      </div>
    );
  }
}
