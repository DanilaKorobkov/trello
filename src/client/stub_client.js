import board_data from '../example_data/board.json'


class StubClient {

    getBoard() {
        return board_data;
    }

    addNewCard(stage) {
        const newId = Math.floor(Math.random() * 1000); // TODO: uuid4
        return {
            "id": newId,
            "stage": stage,
            "title": "Make release v0.2.0"
        };
    }

}

export default StubClient;