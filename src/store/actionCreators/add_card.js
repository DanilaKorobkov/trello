import { CONSTANTS } from "../actions";

function add_card(value, cardsStore) {
  let newCardsStore = [...cardsStore]
  newCardsStore.push(value)
  return {
    type: CONSTANTS.ADD_CARD,
    card: newCardsStore
  };
}

export default add_card;