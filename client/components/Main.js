import React, { Component } from 'react';

import { Link } from 'react-router';
import HeaderContainer from './header/HeaderContainer';
import methods from './methods/index';

export default class Main extends Component {
    render(){
        return (
            <div className="clearfix px1">
                <HeaderContainer title={`Indio Form Builder`}/>
                <section className={`${methods.getGridStyle(8)} pb2 main`}>
                    {React.cloneElement(this.props.children, this.props)}
                </section>
                <section className={`${methods.getGridStyle(4)} visual`}>
                    right
                </section>
            </div>
        )
    }
}
