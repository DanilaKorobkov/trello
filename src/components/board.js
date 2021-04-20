import React, {Component} from "react";
import Stage from "./stage";
import Button from '@material-ui/core/Button';


class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.content.cards,
      stages: this.props.content.stages
    }
  }

  dragCard = (cardId, newStage) => {
    if (this.props.client.changeCardsStage(cardId, newStage)) {
      let newCards = this.state.cards.map(function(card) {
        if (card.id === cardId) {
          card.stage = newStage
        }
        return card;
      });
      this.setState({cards: newCards})
    }
  }

  render() {
    const stages = this.state.stages;
    const cards = this.state.cards;

    const groupedCards = groupCardsByStage(stages, cards);

    let filledStages = []
    for (let stageName of stages.values()) {
      let component = <Stage
        title={stageName}
        cards={groupedCards.get(stageName)}
        client={this.props.client}
      />
      filledStages.push(component)
    }

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {filledStages}
        <Button
          onClick={
            () => this.dragCard(cards[1].id, stages[3])
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
