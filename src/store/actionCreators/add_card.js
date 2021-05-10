import ADD_CARD from '../actions/add_card';

function add_card(value, cardsStore) {
  let newCardsStore = [...cardsStore]
  newCardsStore.push(value)
  return {
    type: ADD_CARD,
    card: newCardsStore
  };
}

export default add_card;