import ADD_STAGE from "../actions/add_stage";
import initialState from '../initialState';

export default function card(state = initialState.stage, action) {
  switch(action.type) {
    case ADD_STAGE: return action.stage;

    default: return state;
  }
}