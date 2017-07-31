function form(state=[], action){
    return {
        // take the current state
        ...state,
        //overwrite this post with a new one
        //[action.postId]:postComments(state[action.postId], action)
    }
}
export default form;
