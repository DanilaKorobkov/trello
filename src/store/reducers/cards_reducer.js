import ADD_CARD from '../actions/add_card';
import initialState from '../initialState';
import MOVE_CARD from "../actions/move_card";

export default function card(state = initialState.card, action) {
  switch(action.type) {
    case ADD_CARD: return action.card;
    case MOVE_CARD: return action.card;

    default: return state;
  }
}
