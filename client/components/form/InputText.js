import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputText extends Component {
    render() {
        let { value, ref, placeholder, extraClassNames  } = this.props;
        return (
            <input type="text" className="p1" ref={ref} placeholder={placeholder} className={extraClassNames}/>
        )
    }
}
