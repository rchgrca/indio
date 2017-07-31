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
    inputs:{
        car:{
            legend: "Car Data",
            placeholder:"e.g. Do you own a car?",
            buttons:["Add Sub-Input", "Delete"],
            subInput:{}

        },
        building:{
            legend: "Building Data",
            placeholder:"e.g. What year was your building built?",
            buttons:["Add Sub-Input", "Delete"],
            subInput:{}
        },
        company:{
            legend: "Company Data",
            placeholder:"e.g. What is your company name?",
            buttons:["Add Sub-Input", "Delete"],
            subInput:{}
        }
    }
};

export default form;
