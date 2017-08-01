/*
- send as little payload as possible in action functions
- actions are like regular JS events that are triggered
- actions should always be pure, do not make async calls in your reducers!
- instead use 'redux-thunk' or 'saga.js'
- normalize deeply nested JSON structures with 'normalizr'
*/

// increment like
export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
// add comment
export function addComment(postId, author, comment){
    return {
        type: 'ADD_COMNENT',
        postId,
        author,
        comment
    }
}
// remove comment
export function removeComment(postId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}
// add input
export function addInput(){
    return {
        type: 'ADD_INPUT'
    }
}

// add sub-input
export function addSubInput(){
    return {
        type: 'ADD_SUBINPUT'
    }
}

// delete input
export function deleteInput(i){
    return {
        type: 'DELETE_INPUT',
        i
    }
}
