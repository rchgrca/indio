const form = {
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
    label: {
        question:"Question",
        type:"Type",
        condition:"Condition"
    },
    button:{
        addSubInput:"Add Sub-Input",
        delete:"Delete"
    },
    inputs:[
        {
            question:"Do you own a car?",
            type:"radio",
            input:true,
            subInput:{}
        },
        {
            question:"What year was your building built?",
            type:"number",
            input:true,
            subInput:{}
        },
        {
            question:"What is the name of your company?",
            type:"text",
            input:true,
            subInput:{}
        },
        {
            question:"",
            type:"",
            input:true,
            subInput:{}
        }
    ]
};

export default form;
