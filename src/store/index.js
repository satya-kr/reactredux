import {createStore , combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from "redux-thunk"


//reducers

const store = combineReducers({
    
});

const middlewareStore = applyMiddleware (ReduxThunk)(createStore);
//for dev tool
export default middlewareStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );