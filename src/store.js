import {compose, createStore, applyMiddleware} from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import {syncHistoryWithStore} from 'react-router-redux'
import {hashHistory} from 'react-router'
import {persistStore, autoRehydrate} from 'redux-persist'
import rootReducer from './reducers'
import localForage from 'localforage'
import createCompressor from 'redux-persist-transform-compress'
import thunk from 'redux-thunk';
import Registrar from './registerServiceWorker.js'

if ('serviceWorker' in navigator) {
  Registrar()
}

const compressor = createCompressor()

let socket = io("https://doutoronline.herokuapp.com/")
//let socket = io("http://localhost:3001")
let socketIoMiddleware = createSocketIoMiddleware(socket, [ '/post/', '/get/','/delete/','/put/' ])

socket.on('action', (d)=> console.log(d.type,d.data))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(
  rootReducer,
  //para tirar o redux dev tools bota só compose abaixo
  composeEnhancers(
  	applyMiddleware(thunk),
    applyMiddleware(socketIoMiddleware),
    autoRehydrate()
  )
)

persistStore(store,{transforms: [compressor], storage: localForage})
export default store
export const history = syncHistoryWithStore(hashHistory, store)