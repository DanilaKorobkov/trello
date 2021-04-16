import Card from "./card";
import React, {Component} from "react";
import Button from '@material-ui/core/Button';


class Stage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards
    };


  }

  createCard = (stage) => {
    let newCard = this.props.client.addNewCard(stage)
    let newCards = this.state.cards
    newCards.push(newCard)
    this.setState({cards: newCards})
}

    render() {

      let cards = []

      for (const card of this.state.cards) {
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

