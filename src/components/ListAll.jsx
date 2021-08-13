import {React,useEffect,useState} from 'react';
import { makeStyles,TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Box,Container,Button,CircularProgress} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Pagination from '@material-ui/lab/Pagination';
import {NavLink} from 'react-router-dom';
import {fetchData} from '../service/Actions/actions';
import {useDispatch} from 'react-redux'; 
import {Redirect} from 'react-router-dom';
import TableData from './TableData';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListAll=(props)=>
{




const dispatch=useDispatch();


let [data,setData]=useState([]);
let [countTotal,setCountTotal]=useState(0);
let [pageNumber,setPageNumber]=useState(1);
let [limit,setLimit]=useState(4);
let [offset,setOffset]=useState(0);
let [thead,setThead]=useState(['ID','Name','LastName','Email','Gender','DOB','Education','Employment','Maritial Status','Vansh,Gotra']);


useEffect(()=>{


const loadData=async()=>{

await dispatch(fetchData(pageNumber,limit))

loadData()
}

},[dispatch,pageNumber,limit]);


const classes=useStyles();




if(props.data.apidata[0].isLoading===true)
{

return(
  <>
   <Container maxWidth="lg" style={{height: '100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <Box component="div" m={1}><CircularProgress/></Box>
   </Container>
 </>);

}else{

return(<>
    <Container maxWidth="lg" style={{height: '100vh' }} >
      <Box component="h1" m={1} style={{textAlign:'center'}}>KD</Box>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table"> 
            <TableHead>
              <TableRow>
		<TableCell>ID</TableCell>
		<TableCell>Name</TableCell>
		<TableCell>LastName</TableCell>
		<TableCell>Email</TableCell>
		<TableCell>Gender</TableCell>
		<TableCell>DOB</TableCell>
		<TableCell>Education</TableCell>
		<TableCell>Employment</TableCell>
		<TableCell>Maritial Status</TableCell>
		<TableCell>Vansh</TableCell>
		<TableCell>Gotra</TableCell>
		<TableCell>Edit</TableCell>
	      </TableRow>
            </TableHead>
             <TableBody>
    
  	
              {props.data.apidata[0].results.map((d,i)=>(<TableRow key={i}>
				<TableCell>{props.data.apidata[0].offset+i+1}</TableCell>
				<TableCell>{d.fname}</TableCell>
                                <TableCell>{d.lastnm}</TableCell>
				<TableCell>{d.email_id}</TableCell>
				<TableCell>{d.pgender}</TableCell>
				<TableCell>{d.dob}</TableCell>
				<TableCell>{d.peductn}</TableCell>
				<TableCell>{d.pemplymnt}</TableCell>
				<TableCell>{d.pmatrial_status}</TableCell>
				<TableCell>{d.vansh}</TableCell>
				<TableCell>{d.gotra}</TableCell>
				<TableCell><NavLink to="/userEdit"><Button variant="contained" color="primary" endIcon={<EditIcon/>}/></NavLink></TableCell>
				</TableRow>))}		
	     </TableBody>		
        </Table>
      </TableContainer>

	<div style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"}}>
	     {<Pagination count={Math.ceil(props.data.apidata[0].count/limit)} size="large" onChange={(event,page)=>(dispatch(fetchData(page,limit)),setPageNumber(page))} page={pageNumber} variant="outlined" />}
	</div>			
    </Container>


    {/*Passing Reuseable Table*/}
     <div>
       {/*<TableData name={props.data.apidata[0].results} thead={thead}/>*/} 
     </div>


</>);

}





}


export default ListAll;