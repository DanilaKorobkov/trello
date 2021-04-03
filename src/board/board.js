
import React, {Component} from "react";
import Stage from "./stage";

class Board extends Component {

  render() {
    const data = this.props.content;
    const groupedCards = this._groupCardsByStage(data);

    const stages = []
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

  _groupCardsByStage(data) {
    const grouped = new Map();
    for (let stageName of data.stages.values()) {
      grouped.set(stageName, [])
    }
    for (let card of data.cards.values()) {
      grouped.get(card.stage).push(card)
    }
    return grouped;
  }
}

export default Board;