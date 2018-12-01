import React, { Component } from "react";
import "./App.css";
import Info from "./Components/Info";
import data from "./data";
import TodoLists from "./Components/TodoLists";
import ItemCreate from "./Components/ItemCreate";
import { inject, observer } from 'mobx-react'

@inject('TaskStore')
@observer
class App extends Component {
  //the bottom state is local
  state = {
    todos: data
  };

  handleChck = (id) => {
    const newTodos = this.state.todos;

    newTodos.forEach(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
    this.setState({ todos: newTodos });
  };

  removeItem = (index, e) => {
    const todosCopy = Object.assign([], this.state.todos)
    todosCopy.splice(index, 1)
    this.setState({ todos: todosCopy })
  }


  // changeItem = (e) => {
  //   console.log(e.target.value)
  //   this.setState({ el: [e.target.value] })
  //   // let index = this.state.el.findIndex((task) => {
  //   //   return task.id === id

  //   // })
  //   // let el = Object.assign({}, this.state.el[index])

  //   // el = e.target.value  //voncvor ba chi anum
  //   // console.log(e.target.value)
  //   // let some = Object.assign([], this.state.el)
  //   // some[index] = el
  //   // this.setState({ el: some })
  // }
  render() {


    let listData = this.state.todos.map((item, index) => (
      <TodoLists
        key={item.id}
        description={item.description}
        deadline={item.deadline}
        done={item.done}
        id={item.id}
        handleChck={this.handleChck}
        removeItem={this.removeItem.bind(this, index)}
      />

    ));

    if (listData.length === 0) {
      return (
        <div className="App">
          <h3>Ther are no To-do's today!</h3>
          <ItemCreate />
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
