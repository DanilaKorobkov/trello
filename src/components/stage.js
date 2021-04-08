import Card from "./card";
import React, {Component} from "react";


class Stage extends Component {

    render() {
        let cards = []

        for (const card of this.props.cards) {
            let component = <Card id={card.id} title={card.title}/>
            cards.push(component)
        }

        return (
            <div style={style}>
                {cards}
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