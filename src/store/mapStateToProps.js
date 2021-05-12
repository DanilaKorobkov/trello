function mapStateToProps(component) {
  switch (component) {
    case "Board": {
      return function (state) {
        return {
          card: state.card,
          stage: state.stage
        };
      }
    }
    case "component2": {
      return function (state) {
        return {
          value_2: state.value_2
        };
      }
    }
    default: return undefined;
  }
}

export default mapStateToProps;