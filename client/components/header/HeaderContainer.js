import React, { Component } from 'react';
import { render } from 'react-dom';

export default class HeaderContainer extends Component {
    render() {
        let { title } = this.props;
        return (
            <section className="bg-darkblue py1 mb2">
                <h2 className="center">{title}</h2>
            </section>
        )
    }
}
