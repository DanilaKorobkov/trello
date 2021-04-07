import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';


class Card extends Component {

    render() {
        return (
              <TextField
                label={this.props.title}
                multiline
                rowsMax={4}
                style={styles.card}
              />
        );
    }
}

const styles = {
    card: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: 280,
        margin: 10,
    }
}

export default Card;
