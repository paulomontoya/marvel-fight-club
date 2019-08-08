import { takeLatest } from "redux-saga/effects";
import { charactersTypes } from "../actions/characters";
import { charactersListSaga } from "./characters";
import { battlelogSaga } from "./battlelog";
import { battlelogTypes } from "../actions/battlelog";

export default function* root() {
  yield takeLatest(charactersTypes.FETCH_CHARACTER_LIST, charactersListSaga);
  yield takeLatest(battlelogTypes.FIGHT, battlelogSaga);
}
