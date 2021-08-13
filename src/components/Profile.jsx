import React,{useEffect,useState} from 'react';
import {Container,Box,Grid,Avatar,Typography } from '@material-ui/core';
import {Redirect} from 'react-router';


const Profile=(props)=>
{

const [data,setData]=useState({});
const [id,setId]=useState(props.data.apilogin[0].id);


//Get users Data
function getUser(userId)
{
 fetch('http://localhost:4000/members/show',{
 method:'POST',
 credentials: 'include',
 headers:{
 'Content-Type': 'application/json'
 },
 body:JSON.stringify({id:userId})
 }).then(d=>d.json()).then((resp)=>{setData(resp[0]);console.log(resp[0])}).catch((err)=>{console.log(err)});

}

useEffect(()=>{getUser(id)},[id]);



return (<>
<Container maxWidth="lg" style={{height: '100vh' }}>
 <Box component="div" style={{margin:"10px"}}>   
  <Grid container spacing={42} style={{margin:'10px'}}>
   
   {/*Profile Image and Username*/}
   <Grid item sm={4} style={{backgroundColor: '#03a9f4',color:'#fff'}}>
    <Grid container  style={{margin:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Grid item sm={6}><Avatar alt="Profile Image" src={`http://localhost:4000${data.img_src}`} style={{width:"160px",height:"160px"}} /></Grid>
       <Grid item sm={6}><h3>{data.fname} {data.lastnm}</h3></Grid>
     </Grid> 
   </Grid>

   
   {/*Complete info of Profile*/}   
   <Grid item sm={8} style={{backgroundColor: '#cfe8fc'}}>
    <Grid container  style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
     <Grid item sm={12} style={{textAlign:'center'}}><h2>Personal Information</h2></Grid>
     <Grid item sm={12} style={{textAlign:'center'}}>
      {
       Object.values(data).map((d,i)=>(<div key={`${i}a`} style={{backgroundColor: (i%2)===0?'#03a9f4':'#35baf6',padding:'10px',margin:'10px',textTransform:'uppercase',fontWeight:'900',color:'#000'}}>{d}</div>))  
      }
     </Grid>    
    </Grid>    
   </Grid>    

   

  </Grid>
 </Box>
</Container>

</>);


 

}




export default Profile;