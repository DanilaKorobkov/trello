import { combineReducers } from 'redux';
import card from "./cards_reducer";
import stage from "./stages_reducer";

const reducers = combineReducers({
  card,
  stage
});

export default reducers;