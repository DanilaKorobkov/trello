import initialState from '../initialState';
import { CONSTANTS } from "../actions";

export default function card(state = initialState.card, action) {
  switch(action.type) {
    case CONSTANTS.ADD_CARD: return action.card;
    case CONSTANTS.MOVE_CARD: return action.card;

    default: return state;
  }
}
