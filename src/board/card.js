import React, {Component} from "react";
import styles from "../styles";
import TextField from '@material-ui/core/TextField';

class Card extends Component {

    render() {
        return (
          <div>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={3}
            defaultValue={this.props.title}
            variant="outlined"
            style={styles.card}
          />

       </div>
        );
    }
}



export default Card;
