import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputSelect extends Component {
    render() {
        let { value, ref, extraClassNames } = this.props;
        return (
            <div class="styled-select slate">
                <select className={extraClassNames} ref={ref}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        )
    }
}
