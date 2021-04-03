import React, {Component} from "react";
import Stage from "./stage";

class Board extends Component {

  render() {
    let stages = []
    let cards = this.props.data;
    let cardsInStages = new Map();

    for (const stageName in this.props.data.stages) {
      let cardList = []
      cardsInStages.set(stageName, cardList);
    }

    for (const [stageName, cardList] of cardsInStages) {
      for (const card in this.props.data.cards) {
        if (card.stage === stageName) {
          cardList.push(card)
        }
      }
    }

    for (const stage of this.props.data.stages) {
      let component = <Stage title={stage} cards={cardsInStages.get(stage)}/>
      stages.push(component)
    }

    return (
      <div>
        {stages}
      </div>
    )
  }
}

export default Board;