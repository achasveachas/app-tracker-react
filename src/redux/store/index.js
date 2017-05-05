import { createStore, combineReducers } from 'redux';
import auth from '../modules/Auth/reducer'
import applications from '../modules/Applications/reducer'

const reducers = combineReducers({
  auth,
  applications
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
