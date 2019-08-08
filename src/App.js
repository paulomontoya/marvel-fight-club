import React from "react";
import { Route, Switch } from "react-router-dom";
import CharactersPage from "./containers/CharactersPage";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, persistor, history } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={CharactersPage} />
            <Route
              component={() => <div style={{ textAlign: "center" }}>404!</div>}
            />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
