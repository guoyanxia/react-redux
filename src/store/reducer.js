import {combineReducers} from'redux';
let counter= (state=12,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.value;//参数
        case 'DEC':
            return state-1;
        default:
            return state;
    }
}
let initValue={
    list:[1,2,3]
}
let todo=(state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState=JSON.parse(JSON.stringify(state));//深度拷贝
            //Object.assign({},state,{a:100})//创建一个新的对象，将state中的对象放到新的里面,对象里都是基本类型时使用
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            let newState2=JSON.parse(JSON.stringify(state));
            newState2.list.splice(action.value,1);
             return newState2;
        default:
            return state;
    }
}
export default combineReducers({
    // counter:counter,
    // todo:todo
    counter,todo
})




//-----------------------------------------------
// import {ADD_TODO_ITEM, DEL_TODO_ITEM} from '../actions/actionTypes';
// let initValue={
//     list:[1,2,3]
// }
// // let initValue=[1,2,3];
// export default (state=initValue,action)=>{
//     switch(action.type){
        
//         case ADD_TODO_ITEM:  
//             let newState=JSON.parse(JSON.stringify(state));
//             newState.list.push(action.value);
//             return newState;
//         case DEL_TODO_ITEM:
//             let newState2=JSON.parse(JSON.stringify(state));
//             newState2.list.splice(action.index,1);
//             return newState2;
//         // case ADD_TODO_ITEM:
//         //     return [...state,action.value];
//         // case DEL_TODO_ITEM:
//         //     return state.filter((item,index)=>{
//         //         return index!==action.index;
//         //     })
//         default:
//         return state;
//     }
// }