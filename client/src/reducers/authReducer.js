// Reducer for authentication
import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    // Return either the user object or false if not logged in
    case FETCH_USER:
      // If a user is not login, back-end server returns empty string
      // We want to return false if action.payload is empty string
      return action.payload || false;
    default:
      // While Ajax is being called to tell login status, return default as null
      return state;
  }
}
