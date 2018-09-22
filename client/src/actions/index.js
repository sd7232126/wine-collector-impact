// Root action creators, can be divided into different files
import axios from 'axios';
import { FETCH_USER, FETCH_BOTTLES, FETCH_BOTTLE, SEARCH_BOTTLE, UPDATE_BOTTLE, DELETE_BOTTLE } from './types';

// Fetch User and check login status
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Create a new Bottle Collection
export const createBottle = (values, history) => async dispatch => {
  const res = await axios.post('/api/bottles', values);
  history.push('/bottles');
  dispatch({ type: FETCH_USER, payload: res.data});
}

// Fetch list of bottle collections by logged in user
export const fetchBottles = () => async dispatch => {
  const res = await axios.get('/api/bottles');
  dispatch({ type: FETCH_BOTTLES, payload: res.data });
}

// Fetch one specific bottle collection by bottle id
export const fetchBottle = (id) => async dispatch => {
  const res = await axios.get(`/api/bottles/${id}`);
  dispatch({ type: FETCH_BOTTLE, payload: res.data });
}

// Filtering the bottle collection list by keyword, update the active bottle state
export const searchBottle = (keyword) => dispatch => {
  dispatch({ type: SEARCH_BOTTLE, payload: keyword });
}

// Update one specific bottle collection by bottle id
export const updateBottle = (values, history) => async dispatch => {
  const res = await axios.post(`/api/bottles/${values._id}`, values);
  history.push('/bottles');
  dispatch({ type: UPDATE_BOTTLE, payload: res.data });
}

// Delete one specific bottle collection by bottle id
export const deleteBottle = (id, history) => async dispatch => {
  const res = await axios.delete(`/api/bottles/${id}`);
  history.push('/bottles');
  dispatch({ type: DELETE_BOTTLE, payload: res.data });
}