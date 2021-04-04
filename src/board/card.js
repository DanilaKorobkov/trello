import React, {Component} from "react";
import styles from "../styles";

class Card extends Component {

    render() {
        return (
            <div style={styles.card}>
                {this.props.id}
            </div>
        );
    }
}



export default Card;
