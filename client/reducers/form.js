// take the current state
//...state,
//overwrite  with a new one

function form(state=[], action){
    switch(action.type){
        case 'ADD_INPUT':
            return {
                ...state,
                inputs:[
                    ...state.inputs,
                    {
                        question:"",
                        type:"",
                        subInput:{}
                    }
                ]
            }
            break;
        case 'ADD_SUBINPUT':
            console.log('...adding SUBINPUT')
            return {
                ...state
            }
            break;
        case 'DELETE_INPUT':
            console.log('...deleting')
            return {
                ...state
            }
            break;
        default:
            return state
    }
}

export default form;
