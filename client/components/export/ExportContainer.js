import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';

export default class ExportContainer extends Component {
    render() {
        let { title, form: { inputs } } = this.props;

        return (
            <div className="preview-container center px4">
                <code className="border p3 mb3 block text-area left-align text-wrap">
                    {`${JSON.stringify(inputs)}`}
                </code>
            </div>
        )
    }
}
