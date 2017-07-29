import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Label extends Component {
    render() {
        let { value, ref, extraClassNames } = this.props;
        return (
            <label className={extraClassNames} ref={ref}>{value}</label>
        )
    }
}
