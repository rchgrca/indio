import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputButton extends Component {
    render() {
        let { value, extraClassNames, addInput, addSubInput, deleteInput, inputNum } = this.props;
        return (
            <button className={extraClassNames} onClick={this.getHandler(value, addInput, addSubInput, deleteInput, inputNum)}>{value}</button>
        )
    }

    getHandler(value, addInput, addSubInput, deleteInput, inputNum){
        const oHandler = {
            "Add Input":addInput,
            "Add Sub-Input":addSubInput.bind(null,inputNum),
            "Delete":deleteInput.bind(null,inputNum)
        }
        return oHandler[value]
    }
}
