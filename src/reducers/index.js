import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import exemplo from './exemploReducer'

const data = {
  exemplo,
  routing:routerReducer
}

const rootReducer = combineReducers(data)
export default rootReducer
