/*
contains rootReducer which accepts other reducers representing state
*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import form from './form';


const rootReducer = combineReducers({
    posts,
    comments,
    form,
    routing: routerReducer
})

export default rootReducer;
