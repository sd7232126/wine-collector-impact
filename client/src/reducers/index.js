// Root reducer to combine state from all reducers
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import bottleReducer from './bottleReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  bottles: bottleReducer
});