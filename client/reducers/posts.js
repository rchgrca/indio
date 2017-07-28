/*
create one reducer for every different state (but redux accepts only one reducer,
rootReducer in our case, index.js)
in this case, there are two different types of state:  posts, comments
this reducer is for 'posts'

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
function posts(state=[], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0,i), // all posts before the one we are updating
                {...state[i], likes: state[i].likes + 1}, // copy entire object first, then update specific object pro
                ...state.slice(i+1) // all posts after the one we are updating
            ]
            break;
        default:
            return state
    }
}
export default posts;
