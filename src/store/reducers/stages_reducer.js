import { CONSTANTS } from "../actions";
import initialState from '../initialState';

export default function card(state = initialState.stage, action) {
  switch(action.type) {
    case CONSTANTS.ADD_STAGE: return action.stage;

    default: return state;
  }
}