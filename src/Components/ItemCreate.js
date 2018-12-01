import React from "react";
import Edit from "./Edit";
import DatePicker from 'react-date-picker';
import TodoLists from './TodoLists';
import UniqueId from 'react-html-id'
import { inject, observer } from 'mobx-react'

@inject('TaskStore')
@observer

class ItemCreate extends React.Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this)
        this.state = {
            // to_do: [],
            // elem: [],
            deadline: [new Date()]
        };
    }

    handleCreate = (e) => {
        e.preventDefault()
        this.props.TaskStore.addTask(this.input.value)
        this.input.value = ''
    };

    removeItem = (index, e) => { this.props.TaskStore.todo.splice(index, 1) }

    handleChck = (id) => {
        this.props.TaskStore.todo.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
        });

    }


    onDateChange = (date) => {
        this.setState({ deadline: date });
    };
    //stex petq edit lini
    changeItem = (id, e) => {

        let index = this.props.TaskStore.todo.findIndex((task, index) => {

            return index !== id

        })

        let copy = Object.assign({}, this.props.TaskStore.todo[index])


        let some = Object.assign([], this.props.TaskStore.todo)
        some[index] = copy;
        console.log(some)
        this.props.TaskStore.todo = [id.target.value];
    }
    render() {
        const saveDate = <DatePicker value={this.state.deadline} />

        let addItem = this.props.TaskStore.todo.map((item, index) => (
            <div key={index}> <TodoLists

                description={item}
                deadline={saveDate}
                done={false}
                id={this.nextUniqueId()}
                removeItem={this.removeItem.bind(this, index)}
                changeEv={this.changeItem.bind(this, index)}
                handleChck={this.handleChck}
            />
                <Edit changeEv={this.changeItem} value={item} /></div>

        ));
        // console.log(this.props.TaskStore.todo)
        // let test = this.state.to_do.map((item, index) => (
        //     <ul key={index} >
        //         <li >

        //             <Edit changeEv={this.handleUpdate} value={item} />
        //         </li>
        //     </ul >
        // ));
        return (
            <div>
                <div className="addItem">
                    <form>
                        <input id="desc" type="text" name="description" placeholder="Enter new task"
                            ref={input => this.input = input} />
                        <button type="submit" className="btn1" onClick={this.handleCreate} >Add</button>
                    </form>

                    <span className='date'> <DatePicker onChange={this.onDateChange} value={this.state.deadline} /></span>

                </div>
                <h3>you have {this.props.TaskStore.numberOfTodos} tasks</h3>
                {addItem}

            </div>
        );
    }
}
export default ItemCreate;