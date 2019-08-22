import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>holo</div>
      </Provider>
    );
  }
}

export default App;
