import {LOGIN} from '../constants';
import {LOGOUT} from '../constants';
import {FETCH_FAILURE} from '../constants'

export default function apilogin(state=[{error:"",isLoggedIn:false,message:"",userName:"",id:0}],action)
{

    switch(action.type)
    {
     case LOGIN:
            return [Object.assign(state[0],{error:"",isLoggedIn:action.payload.isLoggedIn,message:action.payload.message,userName:action.payload.userName,id:action.payload.id})]; 
     case FETCH_FAILURE:
            return [Object.assign(state[0],{message:action.payload,isLoggedIn:false})];             
     case LOGOUT:
           return [Object.assign(state[0],{isLoggedIn:action.payload.logout,message:""})];
     
     default:
         return state 
         
         
         
    }
}