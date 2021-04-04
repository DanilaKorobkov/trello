
import React, {Component} from "react";
import Stage from "./stage";

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

class Board extends Component {

  render() {
    const stages = this.props.content.stages;
    const cards = this.props.content.cards;

    const groupedCards = groupCardsByStage(stages, cards);

    let filledStages = []
    for (let stageName of stages.values()) {
      let component = <Stage
        title={stageName}
        cards={groupedCards.get(stageName)}
      />
      filledStages.push(component)
    }

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {filledStages}
      </div>
    )
  }
}

export default Board;