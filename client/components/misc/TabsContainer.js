import React, { Component } from 'react';
import { render } from 'react-dom';

export default class TabsContainer extends Component {
    render() {
        let { title, handleClickTab } = this.props;
        return (
            <ul>
                <li onClick={handleClickTab} className={`inline-block mr3`}>Create</li>
                <li onClick={handleClickTab} className={`inline-block mr3`}>Preview</li>
                <li onClick={handleClickTab} className={`inline-block mr3`}>Export</li>
            </ul>
        )
    }
}
