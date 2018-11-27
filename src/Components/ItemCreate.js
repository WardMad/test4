import React from "react";
import Edit from "./Edit";
import DatePicker from 'react-date-picker';
import TodoLists from './TodoLists';
import UniqueId from 'react-html-id'

export default class ItemCreate extends React.Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this)
        this.state = {
            to_do: [],
            description: [],
            deadline: [new Date()]
        };
    }

    handleCreate = (e) => {
        let newState = this.state
        newState.to_do.push(this.state.description)
        this.setState(newState)
        //clean input
        this.input.value = ''
        e.preventDefault()
    }

    inputChange = (e) => { this.setState({ description: e.target.value }) }

    handleDelete = (item) => {

        let newState = this.state.to_do
        newState.splice(item, 1)
        this.setState({ newState })
    }

    // handleUpdate = (e) => {
    //     // newState.slice(2, 1, e)
    //     this.setState({ to_do: [e.target.value] })

    // }

    removeItem = (index, e) => {
        const todosCopy = Object.assign([], this.state.to_do)
        todosCopy.splice(index, 1)
        this.setState({ to_do: todosCopy })
    }
    onDateChange = (date) => {
        this.setState({ deadline: date });
    };
    //stex petq edit lini
    changeItem = (id, e) => {

        let index = this.state.to_do.findIndex((task) => {
            return task.id !== id

        })

        let newState = this.state.description[index]

        console.log(index)
        console.log(id.target.value)

        this.setState({ description: [id.target.value] })
        // let kar = Object.assign({}, this.state.to_do[index])

        // kar.description = [id.target.value] //voncvor ba chi anum
        // console.log(kar)
        // let some = Object.assign([], this.state.to_do)
        // some[index] = kar
        // this.setState({ to_do: some })
    }
    render() {
        const saveDate = <DatePicker value={this.state.deadline} />

        let addItem = this.state.to_do.map((item, index) => (
            <div>     <TodoLists
                key={index}
                description={item}
                deadline={saveDate}
                done={item.done}
                id={this.nextUniqueId()}
                removeItem={this.removeItem.bind(this, index)}
                changeEv={this.changeItem.bind(this, item.id)}
            />
                <Edit changeEv={this.changeItem} value={item} /></div>
        ));

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

                    <input id='desc' type="text" name='description' placeholder="Enter new task" onChange={this.inputChange}
                        ref={(input) => this.input = input} />

                    <button type="button" className="btn1" onClick={this.handleCreate} >Add</button>

                    <div>  <DatePicker onChange={this.onDateChange} value={this.state.deadline} /></div>

                </div>
                {addItem}

                {/* {test} */}

            </div>
        );
    }
}
