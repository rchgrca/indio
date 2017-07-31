import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputSelect extends Component {
    render() {
        let { form: { selectInputOptions }, selected, extraClassNames } = this.props;

        return (
            <div>
                <select className={extraClassNames} defaultValue={selected}>
                    {this.getSelectOptions(selectInputOptions)}
                </select>
            </div>
        )
    }

    getSelectOptions(selectInputOptions){
        let aOptions = Object.keys(selectInputOptions)
        return aOptions.map((option, i) => {
            return <option value={option} key={i}>{selectInputOptions[option]}</option>
        });
    }
}
