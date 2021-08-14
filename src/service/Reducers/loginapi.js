import {LOGIN} from '../constants';
import {LOGOUT} from '../constants';
import {FETCH_FAILURE} from '../constants'

export default function apilogin(state=[{error:"",isLoggedIn:false,message:"",userName:"",id:0,userRole:0}],action)
{

    switch(action.type)
    {
     case LOGIN:
            return [Object.assign(state[0],{error:"",isLoggedIn:action.payload.isLoggedIn,message:action.payload.message,userName:action.payload.userName,id:action.payload.id,userRole:action.payload.userRole})]; 
     case FETCH_FAILURE:
            return [Object.assign(state[0],{message:action.payload,isLoggedIn:false,userRole:0})];             
     case LOGOUT:
           return [Object.assign(state[0],{isLoggedIn:action.payload.logout,message:"",userRole:0})];
     
     default:
         return state 
         
         
         
    }
}