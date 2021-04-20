import board_data from '../example_data/board.json'
import { v4 as uuid4 } from 'uuid';


class StubClient {

    getBoard() {
        return board_data;
    }

    addNewCard(stage) {
        const newId = uuid4();
        return {
            "id": newId,
            "stage": stage,
            "title": "Make release v0.2.0"
        };
    }

    changeCardsStage(card, newStage) {
        return true
    }

}

export default StubClient;