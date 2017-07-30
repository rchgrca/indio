import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';
import InputButton from '../form/InputButton';
import InputSelect from '../form/InputSelect';
import SubInputContainer from './SubInputContainer';

export default class CreateContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div>
                <h3 className="center">{`Create`}</h3>
                <ul className="list-reset ml3 clearfix">
                    <SubInputContainer />
                    <ul className="list-reset ml4 clearfix">
                        <SubInputContainer />
                        <ul className="list-reset ml4 clearfix">
                            <SubInputContainer />
                            <SubInputContainer />
                            <ul className="list-reset ml4 clearfix">
                                <SubInputContainer />
                            </ul>
                            <SubInputContainer />
                        </ul>
                    </ul>
                    <SubInputContainer />
                    <SubInputContainer />
                </ul>
                <InputButton value={`Add Input`} ref={`create-input`} extraClassNames={`${methods.getButtonStyle()} ml3`}/>
            </div>
        )
    }
}
