import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class TabsContainer extends Component {
    render() {
        let { title, handleClickTab, tabStyle } = this.props;
        return (
            <div className="tabscontainer">
                <ul className="pl0 items">
                    <li className={tabStyle}>
                        <Link to={`/create`}>Create</Link>
                    </li>
                    <li className={tabStyle}>
                        <Link to={`/preview`}>Preview</Link>
                    </li>
                    <li className={tabStyle}>
                        <Link to={`/export`}>Export</Link>
                    </li>
                </ul>
                <div className="content">
                    content
                </div>
            </div>


        )
    }
}
