import React from "react";
import { observable, computed, action } from 'mobx';


class TaskStore extends React.Component {

    // @observable Task = [
    //     {
    //         "id": this.nextUniqueId(),
    //         "description": "Edgar Alan Po",
    //         "deadline": "2019-09-11",
    //         "done": true
    //     }
    // ];
    @observable todo = [];

    // @observable elem = []

    @action addTask = (task) => { this.todo.push(task) };

    //     @action handleChck = (id, e) => {
    //  this.todo.forEach(todo => {
    //             if (todo.id === id) {
    //                 todo.done = !todo.done;
    //                 console.log(todo)
    //             }
    //         });

    // }


    @computed get numberOfTodos() {
        return this.todo.length;
    };

}

const store = new TaskStore();
export default store;