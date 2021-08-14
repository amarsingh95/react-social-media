import {ALL_USERS_API_DATA} from '../constants';
import {FETCH_REQUEST} from '../constants'
import {FETCH_FAILURE} from '../constants'

export default function apidata(state=[{results:[],offset:0,count:0,isLoading:false,Error:""}],action)
{

    switch(action.type)
    {    
     case FETCH_REQUEST:
          return [{results:[],offset:0,count:0,isLoading:true,Error:""}];                        
     case ALL_USERS_API_DATA:
          return [{results:action.payload.results,offset:action.payload.offset,count:action.payload.totalCount[0].countTotal,isLoading:false,Error:""}];    
     case FETCH_FAILURE:
          return [{results:[],offset:0,count:0,isLoading:false,Error:action.payload}] 
     default:
         return state     
         
    }
}