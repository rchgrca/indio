    /*
create one reducer for every different state (but redux accepts only one reducer,
rootReducer in our case, index.js)
in this case, there are two different types of state:  posts, comments
this reducer is for 'comments'

a reducer accepts 2 things:
1. the action (info about what happened)
2. copy of current state

- updating of state takes place here
- for any action dispatched, all reducers are run, whether you choose to act on
that action or not is up to the specific reducer (video 10)
- do not modify external state, rather make a copy of state, modify the copy, return the copy
- ES6 spread makes copy of array, therefore you don't need to manually create a copy
http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
- called "reducer composition": updating only a slice of the state, a fundamental
pattern of building Redux apps
- http://redux.js.org/docs/basics/Reducers.html
*/
function postComments(state=[], action){
    switch(action.type){
        case 'ADD_COMNENT':
            // return new state with new comment
            return [ ...state,{
                user:action.author,
                text:action.comment
            }];
        case 'REMOVE_COMMENT':
            // return new state with deleted comment
            return [
                // from the start to the comment we want deleted
                ...state.slice(0, action.i),
                // from the comment deleted to the end
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
}

function comments(state=[], action){
    if(typeof action.postId !== "undefined"){
        return {
            // take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]:postComments(state[action.postId], action)
        }
    }
    return state
}
export default comments;
