import {React,useEffect,useState,useRef} from 'react';
import {makeStyles,Container,Box,TextField,Grid,Button,MenuItem,FormControl,Select,InputLabel} from '@material-ui/core';
import {Redirect} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

const UserEdit=(props)=>
{


const objArr={id:0,fname:"",lastnm:"",mob_no:"",email_id:"",pgender:"",dob:"",peductn:"",pemplymnt:"",pmatrial_status:"",img_src:"",vansh:"",gotra:"",caddrs:"",city:"",district:"",state:"",country:"",zip:0,reltn:"",firstnm:"",eductn:"",emplymnt:"",gender:"",personID:"",contactID:"",familyID:""};
let [id,setId]=useState(props.data.apilogin[0].id);
const [data,setData]=useState(objArr); 
let [img,setImg]=useState("");
let [imgName,setImgName]=useState("");
let [imgData,setImgData]=useState("");
let [genderArr,setGenderArr]=useState(["male","female"]);
let [gender,setGender]=useState("male");   

let imageRef=useRef();


const classes=useStyles();

function getUser(userId)
{
fetch('http://localhost:4000/members/show',{
method:'POST',
credentials: 'include',
headers:{
'Content-Type': 'application/json'
},
body:JSON.stringify({id:userId})
}).then(d=>d.json()).then((resp)=>{setData(resp[0]);/*console.log(resp[0])*/}).catch((err)=>{console.log(err)});

}


useEffect(()=>{
getUser(id);
},[id]);


useEffect(()=>{

},[imgName,data.img_src]);


 const hangleImage=(event)=>
 {  console.log(`Handle Image`);
    setImgName(event.target.files[0].name);
    setImg(URL.createObjectURL(event.target.files[0]));

    const reader = new FileReader();
    reader.onload = function(evt) {
    //const str=String(evt.target.result).replace("data:", "").replace(/^.+,/, "");
    const str=String(evt.target.result);
    setImgData(str);
    //imageRef.src=str;
    console.log(imageRef);
    };
    
    reader.readAsDataURL(event.target.files[0]);


 }







  const handleChange =(event) => {
    const name = event.target.name;
    setData({
      ...data,
      [name]: event.target.value,
    });
   
  }

 const handleChangeSelect=(event)=>{
    setGender(event.target.value);
     } 



 const handlePersonalChange=()=>
  {
   let obj=
    {
    gender:data.pgender,
    dob: data.dob,
    eductn: data.peductn,
    emplymnt:data.pemplymnt,
    matrial_status:data.pmatrial_status,
    img_src:String(imgData).replace("data:", "").replace(/^.+,/, ""),
    vansh: data.vansh,
    gotra: data.gotra}

    fetch(`http://localhost:4000/members/update-person/${id}`,{
	method:'PUT',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});
		
		
  }


  const handleAddressChange=()=>
  {
    let obj={
    caddrs:data.caddrs,
    city:data.city,
    district:data.district,
    state:data.state,
    country:data.country,
    zip:data.zip}
    fetch(`http://localhost:4000/members/update-contact/${id}`,{
	method:'PUT',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});	
   
  }

  const handleFamilyChange=()=>{
     let obj={
     reltn:data.reltn,
     firstnm:data.firstnm,
     eductn:data.eductn,
     emplymnt:data.emplymnt,
     gender:data.gender
     }

     fetch(`http://localhost:4000/members/update-family/${id}`,{
	method:'PUT',
	headers:{
	'Content-Type': 'application/json'
	},
	body:JSON.stringify(obj)
	}).then(d=>d.json()).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)});

  } 	
 	









if(data.personalID===null && data.contactID===null && data.familyID===null)
{
  return(<><Redirect to="/adduser"></Redirect></>)
 }
else{
return(<>		
    <Container maxWidth="sm" style={{height: '100vh' }} >
 
        {data.personalID!=null?          	
	<Box component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px"}}>
        <form>
	 <Grid container spacing={3}>
	  <Grid item sm={12}>Personal Information</Grid>
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
	  <img src={imgData?imgData:`http://localhost:4000${data.img_src}`}  ref={imageRef} style={{width:"100px",height:"100px"}}/>
	  </Grid>
	  <Grid item sm={12}>
	  <Button variant="contained" color="primary" onClick={handlePersonalChange}>Update</Button>

	  </Grid>	 		
	 
         </Grid>
	</form>
	</Box>
         :<span></span>} 

      	
        {data.contactID!=null?
	<Box component="div" style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"}}>
         <form>
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
	  <Button variant="contained" color="primary" onClick={handleAddressChange}>Update</Button>
	  </Grid>
         </Grid>
        </form>
	</Box>
         :<span></span>}	

        {data.familyID!=null?	
  	<Box component="div" style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"}}>
         <form> 
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
	  <Button variant="contained" color="primary" onClick={handleFamilyChange}>Update</Button>
	  </Grid>
         </Grid>
         </form>
	</Box>
         :<span></span>}
 
	
    </Container>
</>);

  }
 

}


export default UserEdit;