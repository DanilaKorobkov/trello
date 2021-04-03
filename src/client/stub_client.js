import board_data from '../example_data/board.json'


class StubClient {

    getBoard() {
        return board_data;
    }

}

export default StubClient;