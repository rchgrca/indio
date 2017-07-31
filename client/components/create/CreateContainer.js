import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';
import form from '../../data/form';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';
import InputButton from '../form/InputButton';
import InputSelect from '../form/InputSelect';
import InputContainer from './InputContainer';

export default class CreateContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div>
                <h3 className="center">{`Create`}</h3>
                <ul className="list-reset ml3 clearfix">
                    <InputContainer />
                    <ul className="list-reset ml4 clearfix">
                        <InputContainer />
                        <ul className="list-reset ml4 clearfix">
                            <InputContainer />
                            <InputContainer />
                            <ul className="list-reset ml4 clearfix">
                                <InputContainer />
                            </ul>
                            <InputContainer />
                        </ul>
                    </ul>
                    <InputContainer />
                    <InputContainer />
                </ul>
                <InputButton value={`Add Input`} ref={`create-input`} extraClassNames={`${methods.getButtonStyle()} ml3`}/>
            </div>
        )
    }
}
