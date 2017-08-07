import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import outroReducer from './outroReducer'

const data = {
  outroReducer,
}

const rootReducer = combineReducers(data)
export default rootReducer
