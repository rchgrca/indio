import React, { Component } from 'react';
import { render } from 'react-dom';

import form from '../../data/form';

export default class InputSelect extends Component {
    render() {
        let { value, extraClassNames } = this.props;

        return (
            <div>
                <select className={extraClassNames}>
                    {this.getSelectOptions()}
                </select>
            </div>
        )
    }

    getSelectOptions(){
        let aOptions = Object.keys(form.selectInputOptions);
        return aOptions.map((option, i) => {
            return <option value={option} key={i}>{form.selectInputOptions[option]}</option>
        });
    }
}
