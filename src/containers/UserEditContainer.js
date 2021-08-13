import {connect} from 'react-redux';
import UserEdit from '../components/UserEdit'

const mappStateToProps=(state)=>({data:state})


export default connect(mappStateToProps)(UserEdit);
