import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import LandingPage from "./containers/landingPage";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <LandingPage />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
