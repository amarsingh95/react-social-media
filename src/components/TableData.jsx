import {React,useEffect,useState} from 'react';
import { makeStyles,TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Box,Container,Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableR=(props)=>
{


const classes=useStyles();

console.log(`This is Table`);
console.log(props.name);


if(props.name.length>0){
return(<>
    <Container maxWidth="lg" style={{height: '100vh' }} >
      <Box component="h1" m={1} style={{textAlign:'center'}}>Reusabel Component</Box>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table"> 
            <TableHead>
              <TableRow>
                {props.thead.map((data,i)=>(<TableCell>{data}</TableCell>))} 		
	      </TableRow>
            </TableHead>
             <TableBody>
                {props.name.map((data,i)=>(
                  <TableRow>
                   {Object.values(data).map((d)=>(<TableCell>{d}</TableCell>))}
                  </TableRow>))}   
              		
	     </TableBody>		
        </Table>
      </TableContainer>
		
    </Container>


</>);
}else
{
return(<>...Loading</>);
}




}


export default TableR;