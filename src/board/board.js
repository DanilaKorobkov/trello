
import React, {Component} from "react";
import Stage from "./stage";

class Board extends Component {

  initGroupedCards(data) {
    let groupedCards = new Map();
    for (let stageName of data.stages.values()) {
      groupedCards.set(stageName, [])
    }
    for (let card of data.cards.values()) {
      groupedCards.get(card.stage).push(card)
    }
    return groupedCards;
  }

  render() {
    let data = this.props.data;
    const groupedCards = this.initGroupedCards(data);

    let stages = []
    for (let stageName of data.stages.values()) {
      let component = <Stage
        title={stageName}
        cards={groupedCards.get(stageName)}
      />
      stages.push(component)
    }

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {stages}
      </div>
    )
  }
}

export default Board;