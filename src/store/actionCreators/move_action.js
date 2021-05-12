import { CONSTANTS } from "../actions";

function move_action(newCardsStore) {
  return {
    type: CONSTANTS.MOVE_CARD,
    card: newCardsStore
  };
}

export default move_action;