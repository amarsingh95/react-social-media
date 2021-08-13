import {connect} from 'react-redux';
import Profile from '../components/Profile';


const mapStateToProps=(state)=>({data:state})

export default connect(mapStateToProps)(Profile)