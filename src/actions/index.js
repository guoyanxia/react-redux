import {ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionTypes'
export const add_todo =(value)=>({type:ADD_TODO_ITEM,value:value});
export const del_todo=(index)=>({type:DEL_TODO_ITEM,index:index});