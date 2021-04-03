import Card from "./card";
import React from "react";


class Stage extends React.Component {

    render() {
        let cards = []

        for (const card of this.props.cards) {
            let component = <Card id={card.id} title={card.title}/>
            cards.push(component)
        }

        return (
            <div>
                {cards}
            </div>
        );
    }
}

export default Stage;