import MOVE_CARD from "../actions/move_card";

function move_card(newCardsStore) {
  return {
    type: MOVE_CARD,
    card: newCardsStore
  };
}

export default move_card;