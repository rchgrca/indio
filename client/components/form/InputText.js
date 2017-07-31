import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputText extends Component {
    render() {
        let { value, extraClassNames  } = this.props;
        return (
            <input type="text" className="p1" defaultValue={value} className={extraClassNames}/>
        )
    }
}
