import Card from "./card";
import React, {Component} from "react";
import Button from '@material-ui/core/Button';



class Stage extends Component {

  createCard = (stage) => {
    let newCard = this.props.createCard(stage)
    this.props.addCard(newCard, this.props.cardsStore)
}

    render() {
      let cards = []
      let boardCards = this.props.cards

      for (const card of boardCards) {
        let component = <Card id={card.id} title={card.title}/>
        cards.push(component)
      }
        return (
            <div style={style}>
            <div>
                {cards}
            </div>
              <Button
                onClick={
                  () => this.createCard(this.props.title)
                }
              >Add another card
              </Button>
            </div>
        );
    }
}

const style = {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        margin: 10
}

export default Stage;

