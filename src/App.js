import StubClient from "./client/stub_client";
import Board from "./board/board";
import React from "react";


function App() {
  const client = new StubClient()
  const board = client.getBoard()

  return (
      <Board content={board}/>
  );
}

export default App;
