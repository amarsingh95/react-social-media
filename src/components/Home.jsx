import {React,useState,useRef} from 'react';
import {makeStyles,AppBar,Toolbar,Typography,Button,IconButton,Menu,MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListAllContainer from '../containers/ListAllContainer';
import Register from './Register';
import Login from './Login';
import UserEdit from './UserEdit';
import AddUser from './AddUser';
import {Switch,Route,NavLink} from "react-router-dom";

import LoginContainer from '../containers/LoginContainer';
import AddUserContainer from '../containers/AddUserContainer';
import UserEditContainer from '../containers/UserEditContainer';
import ProfileContainer from '../containers/ProfileContainer';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../service/Actions/actions'; 
import ProtectedRoutes from './ProtectedRoutes';
import TestC from './TestC';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));






const Home=(props)=>
{

const classes = useStyles();	
const dispatch=useDispatch();
const [loggOut,setLoggOut]=useState(false);
const [auth, setAuth] = useState(true);
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const refPicker = useRef();


const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const logout=(event)=>
{
let obj={
     logout:false
        }
dispatch(logoutUser(obj));
}


return(<>

   <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>*/}
          <Typography variant="h6" className={classes.title}>
          </Typography>
         {props.data.apilogin[0].isLoggedIn===false?
         <>
           <NavLink to={`/register`} style={{ textDecoration: 'none',color:"white"}} ><Button color="inherit" >Register</Button></NavLink>
           <NavLink to={`/login`} style={{ textDecoration: 'none',color:"white"}}><Button color="inherit" >Login</Button></NavLink>
         </>
          :
          <>
         <NavLink to={`/listAll`} style={{ textDecoration: 'none',color:"white"}}><Button color="inherit">List All</Button></NavLink>
         <NavLink to={`/table`} style={{ textDecoration: 'none',color:"white"}}><Button color="inherit">Table</Button></NavLink>      

       {/*THis is icon button*/}
           <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                  placement:'bottom'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              > 
                <MenuItem onClick={handleClose}>{props.data.apilogin[0].userName}</MenuItem>
                <NavLink to={`/profile`} style={{ textDecoration: 'none',color:'black'}}><MenuItem >Profile</MenuItem></NavLink>
                <NavLink to={`/login`} style={{ textDecoration: 'none',color:'black'}}><MenuItem onClick={logout}>Logout</MenuItem></NavLink>
              </Menu>


          </>
         }
        </Toolbar>
      </AppBar>
    </div>

   <Switch> 
     
     <Route exact path="/login" component={LoginContainer}/>
     <Route exact path="/register" component={Register}/>
   
     <ProtectedRoutes exact path="/listAll" component={ListAllContainer} isAuth={props.data.apilogin[0].isLoggedIn}/>
     <ProtectedRoutes exact path="/adduser" component={AddUserContainer} isAuth={props.data.apilogin[0].isLoggedIn}/>
     <ProtectedRoutes exact path="/userEdit" component={UserEditContainer} isAuth={props.data.apilogin[0].isLoggedIn}/>
     <ProtectedRoutes exact path="/profile" component={ProfileContainer} isAuth={props.data.apilogin[0].isLoggedIn}/>
     <ProtectedRoutes exact path="/test" component={TestC} isAuth={props.data.apilogin[0].isLoggedIn}/>
     <Route path="*"  exact={true} component={()=>{return <div style={{display:'flex',flexDirection:'column',justifyCOntent:'center',alignItems:'center'}}>Page Not found</div>}}/>	
   </Switch>




</>);


}


export default Home;