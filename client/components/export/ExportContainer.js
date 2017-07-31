import React, { Component } from 'react';
import { render } from 'react-dom';

import form from '../../data/form';

export default class ExportContainer extends Component {
    render() {
        let { title } = this.props,
        oExport = {
            options: {
                responsive: true,
                cutoutPercentage: 0,
                animation: {
                    animateScale: true
                }
            }
        };

        return (
            <div className="preview-container center px4">
                <h3 className="">{`Export`}</h3>
                <code className="border p3 mb3 block text-area left-align text-wrap">
                    {`${JSON.stringify(form)}`}
                </code>
            </div>
        )
    }
}
