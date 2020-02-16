import {combineReducers} from 'redux';
import postReducers from './PostReducer';

export default combineReducers({
    postReducer: postReducers

})