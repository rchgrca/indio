import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import methods from '../methods/index';

export default class TabsContainer extends Component {
    render() {
        const { title, handleClickTab, tabStyle, form: { tabs }, location: { pathname } } = this.props;
        console.log(tabs)
        return (
            <div className="tabscontainer">
                <ul className="pl3 items">
                    {this.getTabs(tabs, pathname, tabStyle)}
                </ul>
            </div>
        )
    }

    getTabs(tabs, pathname, tabStyle){
        let aTabs = Object.keys(tabs);

        return aTabs.map((tab, i) => {
            let tabRoute = tab;
            let selectedStyle = methods.getTabSelectedStyle();
            tabRoute = tab == "create" ? "": tab;
            selectedStyle = tabRoute == pathname.split('').splice(1).join('') ? selectedStyle : "";
            return <li className={`${tabStyle} ${selectedStyle}`} key={i}><Link to={`/${tabRoute}`}>{tabs[tab]}</Link></li>
        });
    }
}
