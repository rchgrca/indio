import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class HeaderContainer extends Component {
    render() {
        let { title, extraClassNames } = this.props;
        return (
            <section className={`${extraClassNames} header-container`}>
                <h2 className="center">
                    <Link to={`/`}>{title}</Link>
                </h2>
            </section>
        )
    }
}
