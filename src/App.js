import Stage from './sprint/stage'


function App(props) {
  return (
      <Stage cards={props.sprint.cards}/>
  );
}

export default App;
