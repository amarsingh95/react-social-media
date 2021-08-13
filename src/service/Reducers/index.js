import {combineReducers} from 'redux'
import apidata from './reducerapi'
import apilogin from './loginapi'

export default combineReducers({
    apidata,
    apilogin
})



