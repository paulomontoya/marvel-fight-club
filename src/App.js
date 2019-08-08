import React from "react";
import { Route, Switch } from "react-router-dom";
import CharactersPage from "./components/CharactersPage";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, persistor, history } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact={true} component={CharactersPage} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
