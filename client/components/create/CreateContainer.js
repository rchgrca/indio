import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CreateContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div className="preview-container">
                <h3 className="center">{`Create`}</h3>
            </div>
        )
    }
}
