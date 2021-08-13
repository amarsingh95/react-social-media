import {connect} from 'react-redux';
import Login from '../components/Login';

const mapStateToProps=state=>
({
data:state
})

export default connect(mapStateToProps)(Login)