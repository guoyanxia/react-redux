import React, { Component } from 'react';
import store from './store/index'; 
class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().todo.list  //合并之后  //之前list:store.getState().list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list //合并之后  //之前list:store.getState().list
            })
        })
    }
    handleAdd=(e)=>{
     if(e.keyCode===13){
        store.dispatch({
            type:'add_item',
            value:e.target.value
        })
        e.target.value='';
     }
    }
    handleDel=(index)=>{  //删除
        store.dispatch({
            type:'del_item',
            value:index
        })
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                  {
                        this.state.list.map((item,index)=>(
                            <li onClick={()=>this.handleDel(index)}key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;