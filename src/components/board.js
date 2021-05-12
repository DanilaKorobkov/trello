import React, {Component} from "react";
import Stage from "./stage";
import Button from '@material-ui/core/Button';
import StubClient from "../client/stub_client";


class Board extends Component {

  client = new StubClient();

  updateCard = (cardId, newStage) => {
      let newCards = this.props.card.map(function(card) {
        if (card.id === cardId) {
          card.stage = newStage
        }
        return card;
      });
      this.props.move_card(newCards)
  }

  render() {
    const stages = this.props.stage;
    const cards = this.props.card;
    const groupedCards = groupCardsByStage(stages, cards);

    let filledStages = []
    for (let stageName of stages.values()) {
      let component = <Stage
        title={stageName}
        cards={groupedCards.get(stageName)}
        createCard={this.client.addNewCard}
        addCard={this.props.add_card}
        cardsStore={cards}
      />
      filledStages.push(component)
    }

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {filledStages}
        <Button
          onClick={
            () => this.updateCard(cards[1].id, stages[3])
          }>Drag Card
        </Button>
      </div>
    )
  }
}

function groupCardsByStage(stages, cards) {
  let grouped = new Map();
  for (let stageName of stages.values()) {
    grouped.set(stageName, [])
  }
  for (let card of cards.values()) {
    grouped.get(card.stage).push(card)
  }
  return grouped;
}

export default Board;
