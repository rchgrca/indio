import React, { Component } from 'react';
import { render } from 'react-dom';

export default class PreviewContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div className="preview-container">
                <h3 className="center">{`Preview`}</h3>
            </div>
        )
    }
}
