import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputText extends Component {
    render() {
        let { value, placeholder, extraClassNames  } = this.props;
        return (
            <input type="text" className="p1" placeholder={placeholder} className={extraClassNames}/>
        )
    }
}
