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

    @observable elem = []
    //callback
    @observable posts = {
        data: [],
        status: ['loading']
    }

    @action addTask = (task) => {
        this.todo.push(task)

    }
    @action deleteTask = (id) => {

        this.todo.forEach((todo, index) => {
            console.log(todo + index)
            if (index === 0) {
                index = -1
                this.todo.splice(index, 1)
            }
        })
    }

    @action changeBox = () => {
        this.posts.data.forEach(todo => {
            if (todo.done === true) {
                todo.done = !todo.done;
            }
        });
    }

    @computed get numberOfTodos() {
        return this.todo.length;
    }


}

const store = new TaskStore();
export default store;