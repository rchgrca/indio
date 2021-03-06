// let's go!
import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';
//import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import CreateContainer from './components/create/CreateContainer';
import PreviewContainer from './components/preview/PreviewContainer';
import ExportContainer from './components/export/ExportContainer';
//import router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//import store
import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={CreateContainer}></IndexRoute>
                <Route path="/preview" component={PreviewContainer}></Route>
                <Route path="/export" component={ExportContainer}></Route>
                <Route path="/reduxstagram" component={PhotoGrid}></Route>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
