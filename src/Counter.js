import React, { Component } from 'react';
import store from'./store';
//store链接action和reducer的对象
//action是一个对象，描述state的变化,
//reducer定义了如何去响应action描述的state的变化，并发送到store
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{//重新订阅页面，刷新render，重新渲染页面
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10};//传参
        store.dispatch(action);
    }
    handleDec=()=>{
        let action={type:'DEC'};
        store.dispatch(action);
    }
    handleOdd=()=>{
        if(store.getState().counter%2 !==0){
            let action={type:'ADD',value:1};
            store.dispatch(action);
        }
    }
    handleAsync=()=>{
        let action={type:'ADD',value:1};
        setTimeout(function (){store.dispatch(action)},1000);
    }
    render() {
        return (
            <div>
                 <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <br/>
                    <button onClick={this.handleOdd}>Increment if odd</button>
                    <br/>
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
