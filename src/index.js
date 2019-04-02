import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
import AuthExample from './auth/AuthExample';
import Counter from './Counter';
// import TodoList from './TodoList';
import TodoList2 from './TodoList2';
import {Provider} from'react-redux';
import store from './store';
// ReactDOM.render(
//     <AuthExample/>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     // API:provider的用法------------------------------------
//     <Provider store={store}>
//         <TodoList/>
//     </Provider>,document.getElementById('root')
// )
//-----------------------------------------------没有API的普通用法
ReactDOM.render(
    <div style={{padding:'30px'}}>

        <Counter/>
        <TodoList2/> 
    </div>,
    document.getElementById('root')
)

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

