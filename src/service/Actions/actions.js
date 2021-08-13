import {ALL_USERS_API_DATA} from '../constants';
import {LOGIN} from '../constants';
import {LOGOUT} from '../constants';
import {FETCH_REQUEST} from '../constants'
import {FETCH_FAILURE} from '../constants'


export const fetchData=(pageParam,limitParam)=>{

   return function(dispatch)
   {
    dispatch(beforeData({"isLoadging":true})) 
    fetch('http://localhost:4000/members/showAll',{
    method:'POST',
    credentials: 'include',
    headers:{
    'Content-Type': 'application/json'
    },
    body:JSON.stringify({page:pageParam,limit:limitParam})
    }).then(d=>d.json()).then((resp)=>{dispatch(setData(resp));}).catch((err)=>{console.log(err);dispatch(failureData({"err":err.message}))});	

   }

}


//Before Data is Loading
const beforeData=(data=null)=>
{
if(data)
{
return {
type: FETCH_REQUEST,
payload:data
};

}

}




//On Success Data
const setData=(data=null)=>
{
if(data)
{
return {
type: ALL_USERS_API_DATA,
payload:data
};

}

}



//On Failure Data

const failureData=(data=null)=>
{
if(data){
return {
payload:data,
type: FETCH_FAILURE
};
}
}




export const dologin=(obj)=>{

const errData='Invalid Credentials';

return function(dispatch)
      { 
      try{
      fetch(`http://localhost:4000/members/login`,{
	method:'POST',
	credentials: 'include',
	headers:{
	'Content-Type': 'application/json',
	},
	body:JSON.stringify(obj)
	}).then((d)=>{if(d.status!==200){dispatch(failureData(errData));return}return d.json();}).then((resp)=>{dispatch(setLogin(resp));}).catch((err)=>{/*console.log(err)*/});
       }catch(err)
       {
       console.log('This is 403 err');
        }
      }

}



const setLogin=(data=null)=>
{
if(data)
{
return {
type: LOGIN,
payload:data
};

}

}

export const logoutUser=(data)=>
{

return function(dispatch)
{
   dispatch(setLogout(data));
  }
}


const setLogout=(data=null)=>
{
if(data)
{
return {
type: LOGOUT,
payload:data
};

}

}


