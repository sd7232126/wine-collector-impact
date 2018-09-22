// Bottle Reducer
import _ from 'lodash';
import { FETCH_BOTTLES, FETCH_BOTTLE, SEARCH_BOTTLE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    // When fetching all bottles, return all bottles as an object, key as id
    case FETCH_BOTTLES:
      const allBottles = _.mapKeys(action.payload, '_id')
      return {
        all: allBottles,
        active: allBottles
      };
    // When fetching one bottle
    case FETCH_BOTTLE:
      // const bottle = action.payload;
      // const newState = { ...state };
      // newState[bottle._id] = bottle;
      // return newState;
      return { ...state, [action.payload._id]: action.payload };
    // When searching bottle by keyword, filter the list and update active bottles in state
    case SEARCH_BOTTLE:
      const keyword = action.payload;
      const results = _.values(state.all).filter((bottle) => (
        !(
          bottle.name.toLowerCase().indexOf(keyword) === -1 &&
          bottle.producer.toLowerCase().indexOf(keyword) === -1 &&
          bottle.year.toLowerCase().indexOf(keyword) === -1
        )
      ));
      return {
        all: state.all,
        active: _.mapKeys(results, '_id')
      }
    // Returning default state
    default:
      return state;
  }
}