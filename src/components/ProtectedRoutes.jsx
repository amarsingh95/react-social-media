import React from 'react'; 
import {Route,Redirect} from 'react-router-dom';


const ProtectedRoutes=({component:Component,isAuth:isAuth,...rest})=>
{
if(isAuth){
  return <Route render={(props)=>(<Component {...props}/>)}/>
 }else
{
  return <Redirect to="/login"/>
  }
}


export default ProtectedRoutes;