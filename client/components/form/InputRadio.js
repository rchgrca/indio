import React, { Component } from 'react';
import { render } from 'react-dom';

import Label from './Label';

export default class InputRadio extends Component {
    render() {
        let { extraClassNames } = this.props;
        return (
            <ul className={`list-reset ${extraClassNames}`}>
                <li className="inline-block">
                    <Label value={`Yes`} extraClassNames={`${extraClassNames} mr2`}/>
                    <input type="radio" className="" value="Yes" checked="true"/>
                </li>
                <li className="inline-block ml2">
                    <Label value={`No`} extraClassNames={`${extraClassNames} mr2`}/>
                    <input type="radio" className="" value="No"/>
                </li>
            </ul>
        )
    }
}
