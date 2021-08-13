import React,{useState} from 'react';
import {makeStyles,TextField,Grid,Button} from '@material-ui/core';
import {Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
}));



const Register=()=>
{

let [data,setData]=useState({firstnm:"",lastnm:"",mob_no:"",email_id:"",usr_pswd:""});

const handleChange = (event) => {
    const name=event.target.name;
    setData({
      ...data,
      [name]: event.target.value,
    });
  };


const handleSignup=()=>
  {
    let obj={firstname:data.firstnm,lastname:data.lastnm,mobile:data.mob_no,email:data.email_id,password:data.usr_pswd};

    fetch(`http://localhost:4000/members/signup`,{
	method:'POST',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});	
   
  }

const classes = useStyles();

return(<>
<Container maxWidth="sm" style={{backgroundColor: '#cfe8fc',height: '80vh'}}>
<h1 style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"40px"}}>Register</h1>
	
      <div className={classes.root}>
			
	  <Grid container spacing={2}>
	   <Grid item sm={12}>			        					     		    
           <TextField fullWidth required id="standard-required" label="First Name" variant="outlined" InputLabelProps={{ shrink: true }} inputProps={{name: 'firstnm',id: 'firstnm'}} onChange={handleChange} /> 
	   </Grid>
	   <Grid item sm={12}>	
   	    <TextField fullWidth required id="standard-required" label="Last Name" variant="outlined" InputLabelProps={{ shrink: true }} inputProps={{name: 'lastnm',id: 'lastnm'}} onChange={handleChange} />
	   </Grid>	
	  <Grid item sm={6}>
	  <TextField required id="standard-required" label="Email" variant="outlined" InputLabelProps={{ shrink: true }} inputProps={{name: 'email_id',id: 'email_id'}} onChange={handleChange} />
	  </Grid>	
	<Grid item sm={6}>
	  <TextField required id="standard-required" label="Phone" variant="outlined" InputLabelProps={{ shrink: true }} inputProps={{name: 'mob_no',id: 'mob_no'}} onChange={handleChange} />
        </Grid>  
	 <Grid item sm={6}>
          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" InputLabelProps={{ shrink: true }} inputProps={{name: 'usr_pswd',id: 'usr_pswd'}} onChange={handleChange}/>
	 </Grid>
	<Grid item sm={6}> 	
	  <TextField id="standard-password-input" label="Confirm Password" type="password" autoComplete="current-password" variant="outlined" InputLabelProps={{ shrink: true }}/>
	</Grid>  
	<Grid item sm={12}>
	  <Button variant="contained" color="primary" onClick={handleSignup}>Submit</Button>
        </Grid>
	  </Grid>	
        
      </div>

</Container>
<div>Footer</div>
</>)
}

export default Register;