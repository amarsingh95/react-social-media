import {React,useEffect,useState} from 'react';
import {makeStyles,Container,Box,TextField,Grid,Button} from '@material-ui/core';
import {Redirect} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));


const AddUser=(props)=>
{


let [id,setId]=useState(props.data.apilogin[0].id);
let [data,setData]=useState({id:0,fname:"",lastnm:"",mob_no:"",email_id:"",pgender:"",dob:"",peductn:"",pemplymnt:"",pmatrial_status:"",img_src:"",vansh:"",gotra:"",caddrs:"",city:"",district:"",state:"",country:"",zip:0,reltn:"",firstnm:"",eductn:"",emplymnt:"",gender:""}); 
let [img,setImg]=useState("");
let [imgName,setImgName]=useState();
let [imgData,setImgData]=useState();
let [loggedIn,setLoggedIn]=useState(false);

const classes=useStyles();

const handleChange = (event) => {
    const name = event.target.name;
    setData({
      ...data,
      [name]: event.target.value,
    });
  };


 const hangleImage=(event)=>
 { //const str="";
    setImgName(event.target.files[0].name);
    setImg(URL.createObjectURL(event.target.files[0]));

    const reader = new FileReader();
    reader.onload = function(evt) {
    const str=String(evt.target.result).replace("data:", "").replace(/^.+,/, "");
     console.log(str);
     setImgData(str);
    };
    
    reader.readAsDataURL(event.target.files[0]);
    //console.log(str);
 } 	
 	
  
function getUser(userId)
{
fetch('http://localhost:4000/members/show',{
method:'POST',
credentials: 'include',
headers:{
'Content-Type': 'application/json'
},
body:JSON.stringify({id:userId})
}).then(d=>d.json()).then((resp)=>{setData(resp[0]);}).catch((err)=>{console.log(err)});

}


  

 const handlePersonalChange=()=>
  {
   let obj=
    {
    ursID:id,
    gender:data.pgender,
    dob: data.dob,
    eductn: data.peductn,
    emplymnt:data.pemplymnt,
    matrial_status:data.pmatrial_status,
    vansh: data.vansh,
    gotra: data.gotra,
    imgsrc:imgData}

    fetch(`http://localhost:4000/members/register`,{
	method:'POST',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});
		
			
  }


  const handleAddressChange=()=>
  {
    let obj={
    usrID:id,
    caddrs:data.caddrs,
    city:data.city,
    district:data.district,
    state:data.state,
    country:data.country,
    zip:data.zip}
    fetch(`http://localhost:4000/members/save-contact`,{
	method:'POST',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});	
   
  }

  const handleFamilyChange=()=>{
     let obj={
     usrID:id,
     reltn:data.reltn,
     firstnm:data.firstnm,
     eductn:data.eductn,
     emplymnt:data.emplymnt,
     gender:data.gender
     }

     fetch(`http://localhost:4000/members/save-family`,{
	method:'POST',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});

  }






useEffect(()=>{

getUser(id);
},[id]);




if(data.personalID!=null && data.contactID!=null && data.familyID!=null){
console.log('NULL');
return(<>
 <Redirect to="/profile"></Redirect>
</>);

}else{

return(<>		
    <Container maxWidth="sm" style={{height: '100vh' }} >

        {data.personalID===null?
	<form>
	<Box component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px"}}>
	 <Grid container spacing={3}>
	  <Grid item sm={12}>Personal Information </Grid>
	  <Grid item sm={12}>
	  <TextField required fullWidth  name="employment" label="Employment" InputLabelProps={{ shrink: true }} value={data.pemplymnt===null?"":data.pemplymnt} variant="outlined" inputProps={{name: 'pemplymnt',id: 'pemplymntId'}} onChange={handleChange} />
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Date of Birth" InputLabelProps={{ shrink: true }} value={data.dob===null?"":data.dob} variant="outlined" inputProps={{name: 'dob',id: 'dob'}} onChange={handleChange}/>
	  </Grid>
	   <Grid item sm={6}>
	  <TextField required fullWidth  label="Education" InputLabelProps={{ shrink: true }} value={data.peductn===null?"":data.peductn} variant="outlined" inputProps={{name: 'peductn',id: 'peductn'}} onChange={handleChange}/>
	  </Grid>		
          <Grid item sm={6}>
	  <TextField required fullWidth  label="Vansh" InputLabelProps={{ shrink: true }} value={data.vansh===null?"":data.vansh} variant="outlined" inputProps={{name: 'vansh',id: 'vansh'}} onChange={handleChange}/>
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Gotra" InputLabelProps={{ shrink: true }} value={data.gotra===null?"":data.gotra} variant="outlined" inputProps={{name: 'gotra',id: 'gotra'}} onChange={handleChange}/>
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Gender" InputLabelProps={{ shrink: true }} value={data.pgender===null?"":data.pgender} variant="outlined" inputProps={{name: 'pgender',id: 'pgender'}} onChange={handleChange} />
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Marital Status" InputLabelProps={{ shrink: true }} value={data.pmatrial_status===null?"":data.pmatrial_status} variant="outlined" inputProps={{name: 'pmatrial_status',id: 'pmatrial_status'}} onChange={handleChange}/>
	  </Grid>

	  <Grid item sm={6}>
	  <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file"  onChange={hangleImage}/>
           <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
             Upload Image {imgName} 
            </Button>
           </label>
	  </Grid>

          <Grid item sm={6}>
            <img style={{width:"100px",height:"100px"}} src={img} alt="image"/>
          </Grid>
 
	  <Grid item sm={12}>
	  <Button variant="contained" color="primary" onClick={handlePersonalChange}>Save</Button>
	  </Grid>	 		
	 
         </Grid>
	</Box>
	</form>
         :<span></span>}
        
	{data.contactID===null?
	<form>
	<Box component="div" style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"}}>
	 <Grid container spacing={3}>
	  <Grid item sm={12}>Contact Information</Grid>		
	   <Grid item sm={12}>
	  <TextField required fullWidth  label="Address" InputLabelProps={{ shrink: true }} value={data.caddrs===null?"":data.caddrs} variant="outlined" inputProps={{name: 'caddrs',id: 'caddrs'}} onChange={handleChange} />
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="City" InputLabelProps={{ shrink: true }} value={data.city===null?"":data.city} variant="outlined" inputProps={{name: 'city',id: 'city'}} onChange={handleChange}/>
	  </Grid>
	   <Grid item sm={6}>
	  <TextField required fullWidth  label="District" InputLabelProps={{ shrink: true }} value={data.district===null?"":data.district} variant="outlined" inputProps={{name: 'district',id: 'district'}} onChange={handleChange}/>
	  </Grid>		
          <Grid item sm={6}>
	  <TextField required fullWidth  label="State" InputLabelProps={{ shrink: true }} value={data.state===null?"":data.state} variant="outlined" inputProps={{name: 'state',id: 'state'}} onChange={handleChange}/>
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Country" InputLabelProps={{ shrink: true }} value={data.country===null?"":data.country} variant="outlined" inputProps={{name: 'country',id: 'country'}} onChange={handleChange}/>
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Zip" InputLabelProps={{ shrink: true }} value={data.zip===null?"":data.zip} variant="outlined" inputProps={{name: 'zip',id: 'zip'}} onChange={handleChange} />
	  </Grid>
	  <Grid item sm={12}>
	  <Button variant="contained" color="primary" onClick={handleAddressChange}>Save</Button>
	  </Grid>
         </Grid>
	</Box>
	</form>
          :<span></span>}

        {data.familyID===null?
 	<form>
	<Box component="div" style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"}}>
	 <Grid container spacing={3}>
	  <Grid item sm={12}>Family Information</Grid>		
	   <Grid item sm={12}>
	  <TextField required fullWidth  label="Relation" InputLabelProps={{ shrink: true }} value={data.reltn===null?"":data.reltn} variant="outlined" inputProps={{name: 'reltn',id: 'reltn'}} onChange={handleChange} />
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Name" InputLabelProps={{ shrink: true }} value={data.firstnm===null?"":data.firstnm} variant="outlined" inputProps={{name: 'firstnm',id: 'firstnm'}} onChange={handleChange}/>
	  </Grid>
	   <Grid item sm={6}>
	  <TextField required fullWidth  label="Education" InputLabelProps={{ shrink: true }} value={data.eductn===null?"":data.eductn} variant="outlined" inputProps={{name: 'eductn',id: 'eductn'}} onChange={handleChange}/>
	  </Grid>		
          <Grid item sm={6}>
	  <TextField required fullWidth  label="Employment" InputLabelProps={{ shrink: true }} value={data.emplymnt===null?"":data.emplymnt} variant="outlined" inputProps={{name: 'emplymnt',id: 'emplymnt'}} onChange={handleChange}/>
	  </Grid>
	  <Grid item sm={6}>
	  <TextField required fullWidth  label="Gender" InputLabelProps={{ shrink: true }} value={data.gender===null?"":data.gender} variant="outlined" inputProps={{name: 'gender',id: 'gender'}} onChange={handleChange}/>
	  </Grid>
	  <Grid item sm={12}>
	  <Button variant="contained" color="primary" onClick={handleFamilyChange}>Save</Button>
	  </Grid>
         </Grid>
	</Box>			
	</form>
         :<span></span>}
      
    </Container>
</>);

}
 

}


export default AddUser;