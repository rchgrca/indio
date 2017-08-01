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
        let { form: { inputs } } = this.props;
        return (
            <div>
                <ul className="list-reset ml3 clearfix">
                    {this.getInputs(inputs)}
                </ul>
                <InputButton value={`Add Input`} extraClassNames={`${methods.getButtonStyle()} ml3`} {...this.props}/>
            </div>
        )
    }

    getInputs(inputs){
        return inputs.map((input, i) => {
            return <InputContainer input={input} {...this.props} key={i}/>
        });
    }
}
