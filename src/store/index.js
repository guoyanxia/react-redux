import {createStore} from 'redux';
import reducer from './reducer';
// let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());将reducer和action连接起来
let store=createStore(reducer);
export default store;