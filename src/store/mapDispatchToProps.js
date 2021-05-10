import { bindActionCreators } from 'redux';
import add_card from './actionCreators/add_card';
import move_card from "./actionCreators/move_card";

function mapDispatchToProps(component) {
  switch (component) {
    case "Board": return function (dispatch) {
      return {
        add_card: bindActionCreators(add_card, dispatch),
        move_card: bindActionCreators(move_card, dispatch)
      };
    };
    default: return undefined;
  }
}

export default mapDispatchToProps;
