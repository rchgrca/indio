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
        let { title, data: { legend, question, buttons } } = this.props;

        return (
            <li className="clearfix mb3">
                <form className="preview-container col col-6">
                    <fieldset>
                        <legend>{legend}</legend>
                        <ul className="list-reset">
                            <li className="row-1">
                                <div className="mb2 clearfix">
                                    <span className="col col-2 py1 pr1 right-alig">
                                        <Label value={`Question`} extraClassNames={``}/>
                                    </span>
                                    <span className="col col-10">
                                        <InputText placeholder={question} extraClassNames={`p1 w100`}/>
                                    </span>
                                </div>
                                <div className="mb2 clearfix">
                                    <span className="col col-2 pr1 right-align">
                                        <Label value={`Type`} extraClassNames={``}/>
                                    </span>
                                    <span className="col col-10">
                                        <InputSelect placeholder={`Do you own a car?`} extraClassNames={`w100`} options={[]}/>
                                    </span>
                                </div>
                                <div className="mb2 clearfix">
                                    <span className="col col-2">&nbsp;</span>
                                    <span className="col col-10 right-align">
                                        {this.getButtons(buttons)}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </li>
        )
    }

    getButtons(buttons){
        return buttons.map((button) => {
            return <InputButton value={button} extraClassNames={`${methods.getButtonStyle()} ml1`}/>
        });
    }
}
