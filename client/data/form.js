let form = {
    tabs:{
      create:"Create",
      preview:"Preview",
      "export":"Export",
      reduxstagram:"Reduxstagram"
    },
    selectInputOptions:{
        text:"Text",
        number:"Number",
        radio:"Yes/No"
    },
    selectNumberOptions:{
        equals:"Equals",
        greaterThan:"Greater than",
        lessThan:"Less Than"
    },
    labelQuestion:"Question",
    labelType:"Type",
    labelCondition:"Condition",
    button:{
        addSubInput:"Add Sub-Input",
        delete:"Delete"
    },
    inputs:[
        {
            question:"Do you own a car?",
            type:"radio",
            subInput:{}
        },
        {
            question:"What year was your building built?",
            type:"number",
            subInput:{}
        },
        {
            question:"What is the name of your company?",
            type:"text",
            subInput:{}
        }
    ]
};

export default form;
