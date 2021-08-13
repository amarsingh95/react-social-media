import {connect} from 'react-redux';
import AddUser from '../components/AddUser';

const mapStateToProps=state=>
({
data:state
})

export default connect(mapStateToProps)(AddUser)