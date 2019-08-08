import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user";
import characters from "./characters";
import battlelog from "./battlelog";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    characters,
    battlelog
  });
