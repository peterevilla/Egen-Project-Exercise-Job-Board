import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';


const reducers = combineReducers({
  jobs: jobsReducer,
});

export default reducers;