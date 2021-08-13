import React,{useState,useEffect} from 'react';
import {makeStyles,TextField,Grid,Button} from '@material-ui/core';
import {Container} from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import {dologin} from '../service/Actions/actions';
import {useDispatch} from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
}));



const Login=(props)=>
{

const dispatch=useDispatch();

const [data,setData]=useState({email:"",password:""});
const [id,setId]=useState(0);
const [loggeIn,setLoggeIn]=useState(false);
const [message,setMessage]=useState('');

const classes = useStyles();


const handleLogin=(event)=>
{
  let obj={email:data.email,password:data.password};
   dispatch(dologin(obj));	
}



const handleChange=(event)=>
{
const name=event.target.name;


setData({...data,[name]:event.target.value});
}





if(props.data.apilogin[0].isLoggedIn){
return <Redirect to="/adduser"></Redirect>
}

return(<>
<Container maxWidth="xs" style={{backgroundColor: '#cfe8fc',height: '80vh'}}>
<h1 style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"40px"}}>Login</h1>
	
      <div className={classes.root}>
			
	  <Grid container spacing={2}>
			        					     		    	
	  <Grid item sm={12}>
	  <TextField required id="standard-required" label="Email" variant="outlined"  InputLabelProps={{ shrink: true }} inputProps={{name: 'email',id: 'email'}} onChange={handleChange} />
	  </Grid>	
  
	 <Grid item sm={12}>
          <TextField id="standard-password-input" label="Password" type="password" variant="outlined" InputLabelProps={{ shrink: true }} inputProps={{name: 'password',id: 'password'}} onChange={handleChange} />
	 </Grid>  
	<Grid item sm={12}>
	  <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Grid>
	<Grid item sm={12}>
		<div style={{color:'red',textAlign:'center'}}>{props.data.apilogin[0].message}</div>
        </Grid>
	  </Grid>	
        
      </div>

</Container>


<div>Footer</div>
</>)

}

export default Login;