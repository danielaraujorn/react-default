import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import contador from './contadorReducer'

const data = {
  contador,
  routing:routerReducer
}

const rootReducer = combineReducers(data)
export default rootReducer
