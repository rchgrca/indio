import React, { Component } from 'react';
import { render } from 'react-dom';

import methods from '../methods/index';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';

export default class PreviewContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div className="preview-container">
                <form>
                    <ul className="list-reset ml3">
                        <li className="row-1 mb4">
                            <Label value={`Do you own a car?`} extraClassNames={`block mb2`}/>
                            <InputRadio extraClassNames={`ml1`}/>
                            <ul className="list-reset ml3 mt4">
                                <li className="row-1-1 mb4">
                                    <Label value={`What is your car's model?`} extraClassNames={`block mb2`}/>
                                    <InputText placeholder={`e.g. Indio, Inc.`} extraClassNames={`ml2 p1`}/>
                                </li>
                                <ul className="list-reset ml3 mt4">
                                    <li className="row-1-2 mb4">
                                        <Label value={`Has your Toyota been recalled?`} extraClassNames={`block mb2`}/>
                                        <InputRadio extraClassNames={`ml1`}/>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <li className="row-2 mb4">
                            <Label value={`What year was your building built?`} extraClassNames={`block mb2`}/>
                            <InputText placeholder={`e.g. 1988`} extraClassNames={`ml2 p1`}/>
                        </li>
                        <li className="row-3 mb4">
                            <Label value={`What was your company's name?`} extraClassNames={`block mb2`}/>
                            <InputText placeholder={`e.g. Indio, Inc.`} extraClassNames={`ml2 p1`}/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}
