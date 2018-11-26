import React, { Component } from "react";
import "./App.css";
import Info from "./Info";
import data from "./data";
import TodoLists from "./TodoLists";
import ItemCreate from "./ItemCreate";


class App extends Component {
  state = {
    todos: data
  };

  handleClick = (id) => {
    const newTodos = this.state.todos;

    newTodos.forEach(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
    this.setState({ todos: newTodos });
  };
  removeItem = (id, e) => {
    let newState = this.state.todos


    console.log(indexOfTask)
    let filt = newState.filter((item, index) => {

      return item.id !== id

    });
    console.log(filt)
    let indexOfTask = newState[filt]
    let x = newState.splice(indexOfTask, 1)
    // newState.splice(item, 1)

    this.setState(x)

  }

  render() {
    let listData = this.state.todos.map(item => (
      <TodoLists
        key={item.id}
        description={item.description}
        deadline={item.deadline}
        done={item.done}
        id={item.id}
        handleClick={this.handleClick}
        removeItem={this.removeItem}
      />

    ));

    // console.log(data[1].deadline = new Date(2021 / 23 / 11))
    // let push = data.push(
    //   {
    //     "id": 12,
    //     "description": "qwqwqw out of bed",
    //     "deadline": "2022-09-11",
    //     "done": false
    //   }
    // )

    if (listData.length === 0) {
      return (
        <div className="App">
          <h3>Ther are no To-do's today!</h3>
        </div>
      );
    }

    return (
      <div className="App">
        <div> <ItemCreate /></div>
        {listData}

        <div><Info /></div>

      </div>
    );
  }
}

export default App;
