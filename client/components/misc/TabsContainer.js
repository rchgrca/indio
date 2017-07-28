import React, { Component } from 'react';
import { render } from 'react-dom';

export default class TabsContainer extends Component {
    render() {
        let { title } = this.props;
        return (
            <div>
                <h2 className="center">Tabs</h2>
            </div>
        )
    }
}
