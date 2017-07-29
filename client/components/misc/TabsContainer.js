import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class TabsContainer extends Component {
    render() {
        const { title, handleClickTab, tabStyle } = this.props;
        return (
            <div className="tabscontainer">
                <ul className="pl3 items">
                    <li className={tabStyle}>
                        <Link to={`/`}>Create</Link>
                    </li>
                    <li className={tabStyle}>
                        <Link to={`/preview`}>Preview</Link>
                    </li>
                    <li className={tabStyle}>
                        <Link to={`/export`}>Export</Link>
                    </li>
                    <li className={tabStyle}>
                        <Link to={`/reduxstagram`}>Reduxstagram</Link>
                    </li>
                </ul>
            </div>


        )
    }
}
