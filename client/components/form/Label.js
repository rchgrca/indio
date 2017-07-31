import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Label extends Component {
    render() {
        let { value, extraClassNames } = this.props;
        return (
            <label className={extraClassNames}>{value}</label>
        )
    }
}
