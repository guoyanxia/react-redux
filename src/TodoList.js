import React, { Component } from 'react';
// import store from './store';
import {add_todo, del_todo} from './actions/index';
import {connect} from 'react-redux';
class TodoList extends Component {
    // constructor(){
    //     super();
    //     // console.log(store.getState());
    //     this.state={
    //         // list:store.getState().todo.list
    //         list:store.getState().list
    //     }
    //     store.subscribe(()=>{
    //         this.setState({
    //             // list:store.getState().todo.list
    //             list:store.getState().list
    //         })
    //     })
    // }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            // store.dispatch({
            //     type:'add_item',
            //     value:e.target.value
            // })
            // store.dispatch(
            //     add_todo(e.target.value)
            // );
            this.props.dispatch(
                add_todo(e.target.value)
            )
            e.target.value='';
        }       
    }
    handleDel=(index)=>{
        console.log('1');
        console.log(index);
        this.props.dispatch(
            del_todo(index)
        )
    }
    render() {
      
        let {list}=this.props;
        // let TodoList=({dispatch,list})=>{
        //     let handleAdd=(e)=>{
        //         if(e.keyCode===13){
        //             dispatch(
        //                 add_todo(e.target.value)
        //             )
        //             e.target.value='';
        //         }       
        //     }
        // // }
        // let handleDel=(index)=>{
        //     dispatch(del_todo(index))
        // }
        // return (
        //     <div>
        //         <input onKeyDown={handleAdd}type="text"/><br/>
        //         <ul>
        //             {list.map((item,index)=>(
        //             // {this.state.list.map((item,index)=>(
        //                 <li  onClick={handleDel.bind(index)}key={index}>{item}</li>
        //             ))}
        //         </ul>
        //     </div>
        // )
        return (
            <div>
                <input onKeyDown={this.handleAdd}type="text"/><br/>
                <ul>
                    {list.map((item,index)=>(
                    // {this.state.list.map((item,index)=>(
                        // <li  onClick={this.handleDel.bind(index)}key={index}>{item}</li>
                        <li  onClick={()=>this.handleDel(index)}key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
// let mapStateToProps=(state)=>{
//     return{
//         list:state
//     }
// }

// export default TodoList;
export default connect(mapStateToProps)(TodoList);//装饰todolist组件，拿到store
