import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputButton extends Component {
    render() {
        let { value, ref } = this.props;
        return (
            <button className="p1" ref={ref}/>{value}</button>
        )
    }
}
