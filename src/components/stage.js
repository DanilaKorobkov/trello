import Card from "./card";
import React, {Component} from "react";
import Button from '@material-ui/core/Button';


class Stage extends Component {

  state = {
    cards: []
  }

  componentDidMount() {
    for (const card of this.props.cards) {
      let component = <Card id={card.id} title={card.title}/>
      let cards = this.state.cards
      cards.push(component)
      this.setState({cards: cards})
    }
  }


  createCard = (stage) => {
    let newCard = this.props.client.addNewCard(stage)
    let newComponent = <Card id={newCard.id} title={newCard.title}/>
    let newCards = this.state.cards
    newCards.push(newComponent)
    this.setState({cards: newCards})
}

    render() {
        return (
            <div style={style}>
            <div>
                {this.state.cards}
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

