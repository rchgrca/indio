import React, { Component } from 'react';
import { render } from 'react-dom';

import Label from '../form/Label';
import InputText from '../form/InputText';
import InputRadio from '../form/InputRadio';

export default class PreviewContainer extends Component {
    render() {
        let { title } = this.props;

        return (
            <div className="preview-container">
                <h3 className="center">{`Preview`}</h3>
                <form>
                    <ul className="list-reset ml3">
                        <li className="row-1 mb4">
                            <Label value={`Do you own a car?`} ref={`preview-label-1`} extraClassNames={`block mb2`}/>
                            <InputRadio ref={`preview-radio-1`} extraClassNames={`ml1`}/>
                            <ul className="list-reset ml3 mt4">
                                <li className="row-1-1 mb4">
                                    <Label value={`What is your car's model?`} ref={`preview-label-1-1`} extraClassNames={`block mb2`}/>
                                    <InputText ref={`preview-text-1-1`} placeholder={`e.g. Indio, Inc.`} ref={`preview-text-1-1`} extraClassNames={`ml2 p1`}/>
                                </li>
                                <ul className="list-reset ml3 mt4">
                                    <li className="row-1-2 mb4">
                                        <Label value={`Has your Toyota been recalled?`} ref={`preview-label-1-2`} extraClassNames={`block mb2`}/>
                                        <InputRadio ref={`preview-radio-1-2`} extraClassNames={`ml1`}/>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <li className="row-2 mb4">
                            <Label value={`What year was your building built?`} ref={`preview-label-2`} extraClassNames={`block mb2`}/>
                            <InputText ref={`preview-row-2-text`} placeholder={`e.g. 1988`} ref={`preview-text-2`} extraClassNames={`ml2 p1`}/>
                        </li>
                        <li className="row-3 mb4">
                            <Label value={`What was your company's name?`} ref={`preview-label-3`} extraClassNames={`block mb2`}/>
                            <InputText ref={`preview-row-2-text`} placeholder={`e.g. Indio, Inc.`} ref={`preview-label-3`} extraClassNames={`ml2 p1`}/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}
