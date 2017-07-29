import React, { Component } from 'react';
import { render } from 'react-dom';

import Label from './Label';

export default class InputRadio extends Component {
    render() {
        let { ref, extraClassNames } = this.props;
        return (
            <ul className={`list-reset ${extraClassNames}`}>
                <li className="inline-block">
                    <Label value={`Yes`} ref={`preview-label-1-radio-1`} extraClassNames={`${extraClassNames} mr2`}/>
                    <input type="radio" className="" ref={ref} value="Yes" checked="true"/>
                </li>
                <li className="inline-block ml2">
                    <Label value={`No`} ref={`preview-label-1-radio-1`} extraClassNames={`${extraClassNames} mr2`}/>
                    <input type="radio" className="" ref={ref} value="No"/>
                </li>
            </ul>
        )
    }
}
