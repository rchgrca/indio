import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

// connect allows me to inject store data at any (component) level I need it in React Router
// in our case, Main
// also exposes action functions to page elements
// use connect instead of React.createClass
// injects state, props, dispatch to Main component
const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App;
