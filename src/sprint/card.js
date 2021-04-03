import React from "react";


class Card extends React.Component {

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
