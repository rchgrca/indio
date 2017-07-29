import React, { Component } from 'react';

import methods from './methods/index';
import HeaderContainer from './misc/HeaderContainer';
import TabsContainer from './misc/TabsContainer';

export default class Main extends Component {
    render(){
        return (
            <div className="px1">
                <HeaderContainer title={`Indio Form Builder`}/>
                <section className={`${methods.getGridStyle(8)} pb2 main border`}>
                    <TabsContainer handleClickTab={methods.handleClickTab} tabStyle={methods.getTabStyle()} />
                    { React.cloneElement(this.props.children, this.props)}
                </section>
                <section className={`${methods.getGridStyle(4)} visual`}>
                    <h3 className="center">Right</h3>
                </section>
            </div>
        )
    }
}
