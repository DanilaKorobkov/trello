import React, {Component} from "react";


class Card extends Component {

    render() {
        return (
            <div>
                {this.props.id}
                {this.props.title}
            </div>
        );
    }
}

export default Card;
