import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import auth from '../modules/Auth/reducer'
import applications from '../modules/Applications/reducer'

const reducers = combineReducers({
  auth,
  applications
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
