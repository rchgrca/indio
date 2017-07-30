import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';
import InputButton from '../form/InputButton';
import InputSelect from '../form/InputSelect';

export default class CreateContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div>
                <ul className="list-reset ml3 clearfix">
                    <li className="clearfix">
                        <form className="preview-container col col-6">
                            <h3 className="center">{`Create`}</h3>
                            <fieldset>
                                <legend>Car ownership</legend>
                                <ul className="list-reset ml3">
                                    <li className="row-1">
                                        <div className="mb2 clearfix">
                                            <Label value={`Question`} ref={`preview-label-1`} extraClassNames={`col col-2 mb2 right-align pt1`}/>
                                            <InputText placeholder={`Do you own a car?`} ref={`preview-text-1-1`} extraClassNames={`col col-9 ml2 p1 `}/>
                                        </div>
                                        <div className="mb2 clearfix">
                                            <Label value={`Type`} ref={`preview-label-1`} extraClassNames={`col col-2 mb2 right-align`}/>
                                            <InputSelect placeholder={`Do you own a car?`} ref={`preview-select-1-1`} extraClassNames={`col col-9 ml2`} options={[]}/>
                                        </div>
                                    </li>
                                </ul>
                                <div className="btn-container right-align">
                                    <InputButton value={`Add Sub-Input`} ref={`preview-button-sub-input-1`} extraClassNames={`${methods.getButtonStyle()} ml3`}/>
                                    <InputButton value={`Delete`} ref={`preview-button-delete-sub-input-1`} extraClassNames={`${methods.getButtonStyle()} ml3`}/>
                                </div>
                            </fieldset>
                        </form>
                    </li>
                </ul>
                <InputButton value={`Add Input`} ref={`create-input`} extraClassNames={`${methods.getButtonStyle()} ml3`}/>
            </div>
        )
    }
}
