import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';
import InputButton from '../form/InputButton';
import InputSelect from '../form/InputSelect';

export default class InputContainer extends Component {
    render() {
        let {
            title,
            input: { question, type, subInput },
            form: { labelQuestion, labelType, labelCondition, button }
        } = this.props;

        return (
            <li className="clearfix mb3">
                <form className="preview-container col col-6">
                    <ul className="list-reset">
                        <li className="row-1 border px3 py2 rounded border-color-gray">
                            <div className="mb2 clearfix">
                                <span className="col col-2 py1 pr1 right-align">
                                    <Label value={labelQuestion} extraClassNames={``}/>
                                </span>
                                <span className="col col-10">
                                    <InputText value={question} extraClassNames={`p1 w100`} {...this.props}/>
                                </span>
                            </div>
                            <div className="mb2 clearfix">
                                <span className="col col-2 pr1 right-align">
                                    <Label value={labelType} extraClassNames={``}/>
                                </span>
                                <span className="col col-10">
                                    <InputSelect selected={type} extraClassNames={`w100`} {...this.props}/>
                                </span>
                            </div>
                            <div className="clearfix">
                                <span className="col col-2">&nbsp;</span>
                                <span className="col col-10 right-align">
                                    {this.getButtons(button)}
                                </span>
                            </div>
                        </li>
                    </ul>
                </form>
            </li>
        )
    }

    getButtons(button){
        let buttons = Object.keys(button);
        return buttons.map((value, i) => {
            return <InputButton value={button[value]} extraClassNames={`${methods.getButtonStyle()} ml1`} key={i}/>
        });
    }
}
