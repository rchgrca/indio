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
        let { title } = this.props;

        return (
            <li className="clearfix mb3">
                <form className="preview-container col col-6">
                    <fieldset>
                        <legend>Car ownership</legend>
                        <ul className="list-reset">
                            <li className="row-1">
                                <div className="mb2 clearfix">
                                    <span className="col col-2 py1 pr1 right-alig">
                                        <Label value={`Question`} ref={`preview-label-1`} extraClassNames={``}/>
                                    </span>
                                    <span className="col col-10">
                                        <InputText placeholder={`Do you own a car?`} ref={`preview-text-1-1`} extraClassNames={`p1 w100`}/>
                                    </span>
                                </div>
                                <div className="mb2 clearfix">
                                    <span className="col col-2 pr1 right-align">
                                        <Label value={`Type`} ref={`preview-label-1`} extraClassNames={``}/>
                                    </span>
                                    <span className="col col-10">
                                        <InputSelect placeholder={`Do you own a car?`} ref={`preview-select-1-1`} extraClassNames={`w100`} options={[]}/>
                                    </span>
                                </div>
                                <div className="mb2 clearfix">
                                    <span className="col col-2">&nbsp;</span>
                                    <span className="col col-10 right-align">
                                        <InputButton value={`Add Sub-Input`} ref={`preview-button-sub-input-1`} extraClassNames={`${methods.getButtonStyle()}`}/>
                                        <InputButton value={`Delete`} ref={`preview-button-delete-sub-input-1`} extraClassNames={`${methods.getButtonStyle()} ml1`}/>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </li>
        )
    }
}
