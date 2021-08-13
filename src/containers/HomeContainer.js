import {connect} from 'react-redux';
import Home from '../components/Home';

const mapStateToProps=(state)=>({data:state});

export default connect(mapStateToProps)(Home);