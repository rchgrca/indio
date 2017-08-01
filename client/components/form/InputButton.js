import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputButton extends Component {
    render() {
        let { value, extraClassNames, addInput, addSubInput, deleteInput } = this.props;
        return (
            <button className={extraClassNames} onClick={this.getHandler(value, addInput, addSubInput, deleteInput)}>{value}</button>
        )
    }

    getHandler(value, addInput, addSubInput, deleteInput){
        const oHandler = {
            "Add Input":addInput,
            "Add Sub-Input":addSubInput,
            "Delete":deleteInput
        }
        return oHandler[value]
    }
}
