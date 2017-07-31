import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';
import InputButton from '../form/InputButton';
import InputSelect from '../form/InputSelect';
import InputContainer from './InputContainer';

export default class CreateContainer extends Component {
    render() {
        let { title, form: { inputs: { car, building, company } } } = this.props;

        return (
            <div>
                <h3 className="center">{`Create`}</h3>
                <ul className="list-reset ml3 clearfix">
                    <InputContainer data={car} {...this.props}/>
                    <InputContainer data={building} {...this.props}/>
                    <InputContainer data={company} {...this.props}/>
                </ul>
                <InputButton value={`Add Input`} extraClassNames={`${methods.getButtonStyle()} ml3`}/>
            </div>
        )
    }
}
