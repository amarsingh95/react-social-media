import {connect} from 'react-redux';
import ListAll from '../components/ListAll';

const mapStateToProps=state=>
({
data:state
})

export default connect(mapStateToProps)(ListAll)