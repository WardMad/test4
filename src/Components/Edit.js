import React from 'react';
import ItemCreate from './ItemCreate';


class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            el: [],
            edit: false
        }
    }
    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    //PARADOX cancels Save a anum ,hahaha
    handleSave = () => {

        this.setState({ edit: !this.state.edit })
        alert('from save')
    }
    handleCancel = () => {

        this.setState({ el: '' })

    }

    render() {
        // var editItems = this.state.el.map((item, index) => (
        //     <div key={index}>
        //         {item}
        //         {console.log(item, index)}
        //     </div>

        // ));
        // console.log(editItems)
        return (

            <div>
                {this.state.edit ? [<input type='text' placeholder={'type to update'}
                    defaultValue={this.props.value} onChange={this.props.changeEv} />,

                <button className='edit' type="button" onClick={this.handleSave}> Save</button >,
                <button className='edit' type="submit" onClick={this.handleCancel} > Cancel</button >] : null}
                <div>

                    <button type="button" onClick={this.toggleEdit}> Edit </button >
                </div>
                {/* {editItems} */}

            </div >
        )
    }
}

export default Edit; 