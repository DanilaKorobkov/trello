import Stage from './board/stage'
import StubClient from "./client/stub_client";


function App() {
  const client = new StubClient()
  const board = client.getBoard()

  return (
      <Stage cards={board.cards}/>
  );
}

export default App;
