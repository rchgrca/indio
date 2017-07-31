import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputSelect extends Component {
    render() {
        let { form: { selectInputOptions } , type, extraClassNames } = this.props;

        return (
            <div>
                <select className={extraClassNames} value={type}>
                    {this.getSelectOptions(selectInputOptions, type)}
                </select>
            </div>
        )
    }

    getSelectOptions(selectInputOptions, type){
        let aOptions = Object.keys(selectInputOptions)
        return aOptions.map((option, i) => {
            return <option value={option} key={i}>{selectInputOptions[option]}</option>
        });
    }
}
