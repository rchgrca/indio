import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputButton extends Component {
    render() {
        let { value, extraClassNames } = this.props;
        return (
            <button className={extraClassNames}>{value}</button>
        )
    }
}
